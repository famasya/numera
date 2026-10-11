import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { existsSync, statSync } from "node:fs";
import { speak, cancelSpeech } from "../src/components/Audio";
import { missions } from "../src/content/missions";
import { narrationClips } from "../src/content/narration-clips";

class FakeAudio {
  static clips: FakeAudio[] = [];
  static blocked = false;
  onplaying: (() => void) | null = null;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  play = vi.fn(() =>
    FakeAudio.blocked
      ? Promise.reject(new Error("Blocked"))
      : Promise.resolve(),
  );
  pause = vi.fn();
  constructor(public src: string) {
    FakeAudio.clips.push(this);
  }
}
beforeEach(() => {
  vi.useFakeTimers();
  FakeAudio.clips = [];
  FakeAudio.blocked = false;
  vi.stubGlobal("Audio", FakeAudio);
  vi.stubGlobal("window", {
    setTimeout,
    clearTimeout,
    speechSynthesis: { cancel: vi.fn(), speak: vi.fn() },
  });
});
afterEach(() => {
  cancelSpeech();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

it("bundles narration matching every mission instruction and guide", () => {
  for (const m of missions)
    for (const text of [m.instruction, m.guide]) {
      const url = narrationClips[text];
      expect(url, `${m.id}: ${text}`).toBeTruthy();
      expect(existsSync(`public${url}`)).toBe(true);
      expect(statSync(`public${url}`).size).toBeGreaterThan(100);
    }
});
it("plays bundled speech without depending on browser voices", () => {
  const status = vi.fn();
  speak(missions[0].instruction, true, status);
  expect(FakeAudio.clips[0].src).toBe(narrationClips[missions[0].instruction]);
  FakeAudio.clips[0].onplaying?.();
  expect(status).toHaveBeenLastCalledWith("playing");
  vi.advanceTimersByTime(5000);
  expect(status).toHaveBeenLastCalledWith("playing");
  FakeAudio.clips[0].onended?.();
  expect(status).toHaveBeenLastCalledWith("ended");
});
it("reports failure instead of waiting forever for playback to start", () => {
  const status = vi.fn();
  speak(missions[0].instruction, true, status);
  vi.advanceTimersByTime(4000);
  expect(status).toHaveBeenLastCalledWith("failed");
  expect(FakeAudio.clips[0].pause).toHaveBeenCalled();
});
it("handles media errors", () => {
  const status = vi.fn();
  speak(missions[0].instruction, true, status);
  FakeAudio.clips[0].onerror?.();
  expect(status).toHaveBeenLastCalledWith("failed");
});
it("cancels previous narration and respects mute", () => {
  speak(missions[0].instruction, true);
  speak(missions[1].instruction, true);
  expect(FakeAudio.clips[0].pause).toHaveBeenCalled();
  expect(FakeAudio.clips[0].onended).toBeNull();
  const status = vi.fn();
  speak(missions[0].instruction, false, status);
  expect(status).toHaveBeenLastCalledWith("muted");
  expect(FakeAudio.clips).toHaveLength(2);
});

it("reports autoplay rejection", async () => {
  FakeAudio.blocked = true;
  const status = vi.fn();
  speak(missions[0].instruction, true, status);
  await Promise.resolve();
  expect(status).toHaveBeenLastCalledWith("failed");
});

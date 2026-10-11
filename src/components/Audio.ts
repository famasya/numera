import { narrationClips } from "../content/narration-clips";
export type SpeechStatus =
  | "loading"
  | "playing"
  | "ended"
  | "muted"
  | "unavailable"
  | "missing-voice"
  | "failed";
let activeAudio: HTMLAudioElement | null = null;
let activeUtterance: SpeechSynthesisUtterance | null = null;
let stopWaiting: (() => void) | null = null;
export function cancelSpeech() {
  stopWaiting?.();
  stopWaiting = null;
  if (activeAudio) {
    activeAudio.onplaying = null;
    activeAudio.onended = null;
    activeAudio.onerror = null;
    activeAudio.pause();
    activeAudio = null;
  }
  if (activeUtterance) {
    activeUtterance.onstart = null;
    activeUtterance.onend = null;
    activeUtterance.onerror = null;
    activeUtterance = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window)
    window.speechSynthesis.cancel();
}
export function speak(
  text: string,
  enabled: boolean,
  onStatus?: (status: SpeechStatus) => void,
) {
  if (!enabled) {
    onStatus?.("muted");
    return;
  }
  if (typeof window === "undefined") {
    onStatus?.("unavailable");
    return;
  }
  cancelSpeech();
  onStatus?.("loading");
  const clipUrl = narrationClips[text];
  if (clipUrl) {
    const clip = new Audio(clipUrl);
    activeAudio = clip;
    const fail = () => {
      if (activeAudio !== clip) return;
      stopWaiting?.();
      stopWaiting = null;
      clip.pause();
      activeAudio = null;
      onStatus?.("failed");
    };
    const timeout = window.setTimeout(fail, 4000);
    stopWaiting = () => window.clearTimeout(timeout);
    clip.onplaying = () => {
      stopWaiting?.();
      stopWaiting = null;
      onStatus?.("playing");
    };
    clip.onended = () => {
      if (activeAudio !== clip) return;
      activeAudio = null;
      onStatus?.("ended");
    };
    clip.onerror = fail;
    void clip.play().catch(fail);
    return;
  }
  if (!("speechSynthesis" in window)) {
    onStatus?.("unavailable");
    return;
  }
  const synth = window.speechSynthesis;
  onStatus?.("loading");
  const voice = () =>
    synth
      .getVoices()
      .filter((v) => /^(id|in)([-_]|$)/i.test(v.lang))
      .sort((a, b) => Number(b.localService) - Number(a.localService))[0];
  function play(selected: SpeechSynthesisVoice) {
    stopWaiting?.();
    stopWaiting = null;
    const utterance = new SpeechSynthesisUtterance(text);
    activeUtterance = utterance;
    utterance.lang = "id-ID";
    utterance.voice = selected;
    utterance.rate = 0.85;
    const started = window.setTimeout(() => {
      if (activeUtterance !== utterance) return;
      cancelSpeech();
      onStatus?.("failed");
    }, 4000);
    stopWaiting = () => window.clearTimeout(started);
    utterance.onstart = () => {
      stopWaiting?.();
      stopWaiting = null;
      onStatus?.("playing");
    };
    utterance.onend = () => {
      activeUtterance = null;
      onStatus?.("ended");
    };
    utterance.onerror = (event) => {
      stopWaiting?.();
      stopWaiting = null;
      activeUtterance = null;
      onStatus?.(
        event.error === "language-unavailable" ||
          event.error === "voice-unavailable"
          ? "missing-voice"
          : "failed",
      );
    };
    // Keep the utterance alive, and recover if the browser speech queue was paused.
    synth.resume();
    synth.speak(utterance);
  }
  const selected = voice();
  if (selected) {
    play(selected);
    return;
  }
  // Voice lists can arrive after the first user gesture; do not silently discard it.
  const update = () => {
    const selected = voice();
    if (selected) play(selected);
  };
  const timeout = window.setTimeout(() => {
    stopWaiting?.();
    stopWaiting = null;
    onStatus?.("missing-voice");
  }, 1500);
  synth.addEventListener("voiceschanged", update);
  stopWaiting = () => {
    window.clearTimeout(timeout);
    synth.removeEventListener("voiceschanged", update);
  };
}
export function chime(enabled: boolean) {
  if (!enabled) return;
  try {
    const ctx = new AudioContext();
    [523, 659, 784].forEach((frequency, i) => {
      const osc = ctx.createOscillator(),
        gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.14);
      gain.gain.linearRampToValueAtTime(
        0.06,
        ctx.currentTime + i * 0.14 + 0.02,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + i * 0.14 + 0.4,
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.14);
      osc.stop(ctx.currentTime + i * 0.14 + 0.4);
    });
    setTimeout(() => void ctx.close(), 1000);
  } catch {
    /* Visual feedback always accompanies sound. */
  }
}

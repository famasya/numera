export function speak(text: string, enabled: boolean) {
  if (
    !enabled ||
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  )
    return;
  const voice = window.speechSynthesis
    .getVoices()
    .find((v) => v.lang.toLowerCase().startsWith("id"));
  // Do not read Indonesian with a different-language voice.
  if (!voice) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "id-ID";
  utterance.voice = voice;
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
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

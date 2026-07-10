export function playDing(): void {
    try {
        const ctx = new AudioContext();

        // Main tone
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(880, ctx.currentTime);       // A5
        oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1); // glide up

        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4); // fade out

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.4);

        // Harmony — a second tone a fifth above for richness
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();

        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(1320, ctx.currentTime);
        gain2.gain.setValueAtTime(0.15, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

        osc2.start(ctx.currentTime);
        osc2.stop(ctx.currentTime + 0.3);

        // Clean up audio context after sound finishes
        oscillator.onended = () => ctx.close();

    } catch {
        // AudioContext blocked or unavailable — fail silently
        // This happens if user hasn't interacted with the page yet
    }
}
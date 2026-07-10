interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    shape: "square" | "circle";
}

const COLORS = [
    "#3b82f6", // blue
    "#8b5cf6", // purple
    "#ec4899", // pink
    "#f59e0b", // amber
    "#10b981", // green
    "#f97316", // orange
];

export function triggerConfetti(x: number, y: number): void {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
  `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles bursting from click position
    const particles: Particle[] = Array.from({length: 32}, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 3;
        return {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 3, // slight upward bias
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: Math.random() * 6 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1,
            shape: Math.random() > 0.5 ? "square" : "circle",
        };
    });

    let animationId: number;
    let frame = 0;
    const maxFrames = 60;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25;           // gravity
            p.vx *= 0.98;           // air resistance
            p.rotation += p.rotationSpeed;
            p.opacity = 1 - frame / maxFrames;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;

            if (p.shape === "circle") {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            }

            ctx.restore();
        });

        frame++;

        if (frame < maxFrames) {
            animationId = requestAnimationFrame(draw);
        } else {
            cancelAnimationFrame(animationId);
            canvas.remove(); // clean up DOM — no memory leak
        }
    }

    animationId = requestAnimationFrame(draw);
}
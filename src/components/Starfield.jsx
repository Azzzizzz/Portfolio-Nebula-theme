import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let stars = [];
        let shootingStars = [];

        const setCanvasSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Star Class
        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.opacity = Math.random();
                this.speed = Math.random() * 0.05;
            }

            update() {
                this.opacity += this.speed;
                if (this.opacity > 1 || this.opacity < 0) {
                    this.speed = -this.speed;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Shooting Star Class
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = 0;
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.opacity = 1;
                this.dy = Math.random() * 10 + 10;
                this.dx = Math.random() * 10 - 5; // Slight angle
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;
                this.opacity -= 0.01;
                if (this.y > height || this.opacity <= 0) {
                    this.reset();
                    // Randomize re-appearance to not be constant
                    this.y = -100;
                    if (Math.random() > 0.05) { // 95% chance to stay off screen for a bit
                        this.x = -100; // Park it
                    }
                }
            }

            draw() {
                if (this.x < 0 || this.y < 0) return;
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.dx * 2, this.y - this.dy * 2);
                ctx.stroke();
            }
        }

        // Comet Class
        class Comet {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = -100;
                this.y = Math.random() * (height / 2); // Start in top half
                this.size = 4; // Increased size
                this.speed = 2.5;
                this.angle = Math.PI / 6; // 30 degrees
                this.tailLength = 250; // Longer tail for bigger comet
                this.opacity = 0;
                this.active = false;
                // Randomize next appearance
                this.nextAppearance = Date.now() + Math.random() * 10000 + 5000; // 5-15s delay
            }

            update() {
                if (!this.active) {
                    if (Date.now() > this.nextAppearance) {
                        this.active = true;
                        this.opacity = 1;
                        this.x = -100;
                        this.y = Math.random() * (height / 3); // Top third
                    }
                    return;
                }

                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);

                // Fade out when leaving screen
                if (this.x > width + 100 || this.y > height + 100) {
                    this.active = false;
                    this.reset();
                }
            }

            draw() {
                if (!this.active) return;

                // Draw Tail
                const gradient = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - this.tailLength * Math.cos(this.angle),
                    this.y - this.tailLength * Math.sin(this.angle)
                );
                // Fire & Ice Gradient (Match Reference): White -> Yellow -> Orange -> Blue
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`); // Core (White)
                gradient.addColorStop(0.1, `rgba(253, 224, 71, ${this.opacity * 0.9})`); // Inner Glow (Yellow)
                gradient.addColorStop(0.3, `rgba(249, 115, 22, ${this.opacity * 0.7})`); // Mid Tail (Orange)
                gradient.addColorStop(0.6, `rgba(59, 130, 246, ${this.opacity * 0.5})`); // Outer Tail (Blue)
                gradient.addColorStop(1, `rgba(96, 165, 250, 0)`); // Fade out (Light Blue)

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 6; // Thicker for more impact
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - this.tailLength * Math.cos(this.angle),
                    this.y - this.tailLength * Math.sin(this.angle)
                );
                ctx.stroke();

                // Draw Head
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Glow
                ctx.shadowBlur = 25;
                ctx.shadowColor = "rgba(253, 224, 71, 0.9)"; // Yellow/Gold glow
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow
            }
        }

        // Initialize Stars
        for (let i = 0; i < 300; i++) {
            stars.push(new Star());
        }

        // Initialize Shooting Stars
        for (let i = 0; i < 2; i++) {
            shootingStars.push(new ShootingStar());
        }

        // Initialize Comet
        const comet = new Comet();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            // Occasional shooting star
            if (Math.random() < 0.02 && shootingStars.length < 5) {
                shootingStars.push(new ShootingStar());
            }

            shootingStars.forEach((star, index) => {
                star.update();
                star.draw();
                if (star.opacity <= 0) {
                    shootingStars.splice(index, 1);
                }
            });

            // Update and Draw Comet
            comet.update();
            comet.draw();

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default Starfield;

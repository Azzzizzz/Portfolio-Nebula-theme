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

        // Initialize Stars
        for (let i = 0; i < 200; i++) {
            stars.push(new Star());
        }

        // Initialize Shooting Stars
        for (let i = 0; i < 2; i++) {
            shootingStars.push(new ShootingStar());
        }

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

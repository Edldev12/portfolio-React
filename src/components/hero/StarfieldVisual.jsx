import { useEffect, useRef } from "react";
import "./StarfieldVisual.css";

export default function StarfieldVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    // Generate static and twinkling stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.3 ? "#00d2ff" : "#ffffff",
    }));

    // Generate active shooting stars
    const shootingStars = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height / 2),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 4 + 2,
      angle: Math.PI / 4, // 45 degree angle
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.abs(star.alpha);
        ctx.shadowBlur = star.size * 3;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      // Reset global alpha for shooting stars
      ctx.globalAlpha = 1;

      // Draw Shooting Stars
      shootingStars.forEach((s) => {
        const headX = s.x;
        const headY = s.y;
        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
        gradient.addColorStop(0, "#00d2ff");
        gradient.addColorStop(0.5, "rgba(0, 210, 255, 0.4)");
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Move shooting star along its trajectory
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Reset shooting star when it leaves screen boundaries
        if (s.x > width || s.y > height) {
          s.x = Math.random() * width - width * 0.2;
          s.y = -20;
          s.length = Math.random() * 80 + 40;
          s.speed = Math.random() * 4 + 2;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
import { useEffect, useRef } from "react";

export const CursorFollower = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>();
  const dotRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.style.position = "fixed";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dotSize = 8; // Smaller dot size
    const lag = 8; // Slightly faster movement
    const color = "#60A5FA"; // Using the website's soft blue theme color

    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const onWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateDot = () => {
      context.clearRect(0, 0, width, height);

      // Update dot position with lag
      dotRef.current.x += (cursorRef.current.x - dotRef.current.x) / lag;
      dotRef.current.y += (cursorRef.current.y - dotRef.current.y) / lag;

      // Draw dot
      context.fillStyle = color;
      context.beginPath();
      context.arc(dotRef.current.x, dotRef.current.y, dotSize, 0, 2 * Math.PI);
      context.fill();
      context.closePath();

      animationFrameRef.current = requestAnimationFrame(updateDot);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);
    updateDot();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.remove();
    };
  }, []);

  return null;
};
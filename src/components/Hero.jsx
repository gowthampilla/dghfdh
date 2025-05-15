import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const createSquares = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 5,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      }));
    };

    setSquares(createSquares());

    const animate = () => {
      setSquares(prevSquares =>
        prevSquares.map(square => {
          let newX = square.x + square.speedX;
          let newY = square.y + square.speedY;

          if (newX <= 0 || newX >= window.innerWidth) {
            newX = Math.max(0, Math.min(window.innerWidth, newX));
            square.speedX *= -1;
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newY = Math.max(0, Math.min(window.innerHeight, newY));
            square.speedY *= -1;
          }

          return {
            ...square,
            x: newX,
            y: newY,
            rotation: square.rotation + square.rotationSpeed
          };
        })
      );
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      setSquares(prevSquares =>
        prevSquares.map(square => ({
          ...square,
          x: Math.min(square.x, window.innerWidth),
          y: Math.min(square.y, window.innerHeight)
        }))
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero">
      {squares.map(square => (
        <div
          key={square.id}
          className="floating-square"
          style={{
            position: 'absolute',
            width: `${square.size}px`,
            height: `${square.size}px`,
            left: `${square.x}px`,
            top: `${square.y}px`,
            backgroundColor: square.color,
            transform: `rotate(${square.rotation}deg)`,
            borderRadius: '2px',
            willChange: 'transform',
          }}
        />
      ))}

      <div className="hero-content">
        <h1>
          Eterna <span className="highlight">AI</span>
        </h1>
        <p>Preserve Your Essence. Forever.</p>
        <button onClick={() => navigate('/footer')}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;

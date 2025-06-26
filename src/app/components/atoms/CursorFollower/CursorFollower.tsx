'use client';

import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [mousePos, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-2xl pointer-events-none z-50 transition-transform duration-50"
      style={{
        transform: `translate(${mousePos.x - 144}px, ${mousePos.y - 144}px)`,
      }}
    />
  );
};

export default CursorFollower;

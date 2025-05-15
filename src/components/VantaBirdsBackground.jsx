import { useEffect, useRef, useState } from "react";

export default function VantaBirdsBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!vantaEffect && window.VANTA?.BIRDS && vantaRef.current) {
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffeec5,
          color1: 0xff0000,
          color2: 0xd1ffff,
        });
        setVantaEffect(effect);
        clearInterval(interval); // Stop checking once initialized
      }
    }, 100); // Check every 100ms until ready

    return () => {
      clearInterval(interval);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    />
  );
}

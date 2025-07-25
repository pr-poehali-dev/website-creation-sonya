import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Flower {
  id: number;
  x: number;
  y: number;
  emoji: string;
  scale: number;
}

const Garden = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [showDelayedMessage, setShowDelayedMessage] = useState(false);
  
  const flowerEmojis = ["🌸", "🌺", "🌻", "🌷", "🌹", "🏵️", "💐", "🌼", "🌿", "🍀"];

  useEffect(() => {
    // Show delayed message after 3 minutes
    const timer = setTimeout(() => {
      setShowDelayedMessage(true);
    }, 180000); // 3 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newFlower: Flower = {
      id: Date.now() + Math.random(),
      x,
      y,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      scale: 0.5 + Math.random() * 0.5 // Random scale between 0.5 and 1
    };
    
    setFlowers(prev => [...prev, newFlower]);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat cursor-crosshair"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/430d7258-9e6c-4f33-b114-327a04bb22a1.jpg')`
      }}
      onClick={handleClick}
    >
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/80 hover:text-white transition-colors text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
      >
        ← назад
      </Link>
      
      {/* Top instruction */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
        <h1 
          className="text-2xl md:text-3xl text-white text-center animate-fade-in"
          style={{ 
            fontFamily: 'Cormorant, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}
        >
          посади цветочки
        </h1>
      </div>

      {/* Bottom instruction */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <p 
          className="text-lg text-white text-center animate-fade-in"
          style={{ 
            fontFamily: 'Cormorant, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}
        >
          нажми на экран
        </p>
      </div>

      {/* Delayed message - appears after 3 minutes */}
      {showDelayedMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <p 
            className="text-2xl md:text-3xl text-white text-center px-4 animate-fade-in bg-black/30 py-4 rounded-lg backdrop-blur-sm"
            style={{ 
              fontFamily: 'Cormorant, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
          >
            ты делаешь всё лучшим
          </p>
        </div>
      )}

      {/* Flowers */}
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="absolute pointer-events-none animate-scale-in"
          style={{
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            fontSize: `${flower.scale * 2}rem`,
            transform: 'translate(-50%, -50%)',
            animation: 'scale-in 2s ease-out, fade-in 3s ease-out'
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  );
};

export default Garden;
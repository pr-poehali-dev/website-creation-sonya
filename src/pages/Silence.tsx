import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Silence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  
  const supportiveMessages = [
    "у тебя все получается",
    "я рядом",
    "ты не одна, мы в этом вместе",
    "я вижу как ты стараешься и делаешь очень многое",
    "сейчас все кажется безнадежным, но я знаю, что будущее готовит нам много хорошего",
    "я тобой горжусь",
    "будь добрее к себе, ты делаешь все что в твоих силах",
    "тяжелые времена настигают всех нас, но мы выживаем становясь сильными",
    "пообещай мне, что всегда будешь помнить: ты смелее, сильнее и умнее чем думаешь",
    "ты делаешь достаточно и даже больше",
    "ты большая умничка",
    "всё наладится, держись",
    "у тебя золотое сердце",
    "ты делаешь мир лучше",
    "я буду с тобой на каждом этапе пути",
    "ты отлично справляешься",
    "ты лучшая",
    "я верю в тебя"
  ];

  // Firefly component
  const Firefly = ({ delay }: { delay: number }) => {
    const [position, setPosition] = useState({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        });
      }, 3000 + Math.random() * 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div
        className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-60 animate-pulse transition-all duration-[3000ms] ease-in-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          animationDelay: `${delay}ms`,
          boxShadow: '0 0 6px rgba(255, 255, 0, 0.8)',
        }}
      />
    );
  };

  useEffect(() => {
    // Fade in page
    setTimeout(() => setIsVisible(true), 100);

    // Message rotation
    const messageInterval = setInterval(() => {
      setMessageVisible(false);
      setTimeout(() => {
        const randomMessage = supportiveMessages[Math.floor(Math.random() * supportiveMessages.length)];
        setCurrentMessage(randomMessage);
        setMessageVisible(true);
      }, 500);
    }, 4000);

    // Set initial message
    setTimeout(() => {
      setCurrentMessage(supportiveMessages[0]);
      setMessageVisible(true);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div 
      className={`min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/275620f8-7582-4194-abce-4c1210a77826.jpeg')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Fireflies */}
      {Array.from({ length: 15 }, (_, i) => (
        <Firefly key={i} delay={i * 500} />
      ))}
      
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/60 hover:text-white transition-colors text-sm"
      >
        ← назад
      </Link>
      
      {/* Supportive message at top */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
        <p 
          className={`text-white/80 text-sm text-center max-w-md px-4 transition-opacity duration-500 ${
            messageVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          {currentMessage}
        </p>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 
            className={`text-3xl md:text-5xl text-white mb-8 transition-all duration-2000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontFamily: 'Cormorant, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
          >
            тишина, расслабься и послушай<br />
            звучание светлячков
          </h1>
        </div>
      </div>

      {/* Background audio */}
      <audio autoPlay loop>
        <source src="data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADAAAAAAA=" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Silence;
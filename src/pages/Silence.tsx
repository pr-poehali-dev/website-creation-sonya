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
      

      
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/60 hover:text-white transition-colors text-sm"
      >
        ← назад
      </Link>
      

      
      {/* Main content - centered message */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center">
          <p 
            className={`text-white text-2xl md:text-3xl text-center max-w-2xl mx-auto px-4 transition-opacity duration-500 ${
              messageVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              fontFamily: 'Cormorant, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              lineHeight: '1.6'
            }}
          >
            {currentMessage}
          </p>
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
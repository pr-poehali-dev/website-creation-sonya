import { useState } from "react";
import { Link } from "react-router-dom";

const Pleasures = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (text: string) => {
    setMessage(text);
    setShowMessage(true);
    
    // Auto hide message after 10 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 10000);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/be54b951-ce6f-4207-abff-4c8612237e02.jpg')`
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/80 hover:text-white transition-colors text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
      >
        ← назад
      </Link>
      
      {/* Message popup - moved to bottom */}
      {showMessage && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 animate-slide-up-fade">
          <div 
            className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-2xl border border-white/30 max-w-sm mx-4"
          >
            <p 
              className="text-xl md:text-2xl text-gray-800 text-center font-medium whitespace-nowrap"
              style={{ fontFamily: 'Cormorant, serif' }}
            >
              {message}
            </p>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-4xl md:text-6xl text-white mb-16 animate-fade-in"
          style={{ 
            fontFamily: 'Cormorant, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}
        >
          приятности
        </h1>
        
        {/* Buttons */}
        <div className="flex flex-col gap-6 items-center">
          <button
            onClick={() => handleButtonClick("целую! МУА МУА МУА!")}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            поцеловашки
          </button>
          
          <button
            onClick={() => handleButtonClick("обнимаю, КРЕПКО ПРИ КРЕПКО!")}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            обнимашки
          </button>
          
          <button
            onClick={() => handleButtonClick("глажу глажу!")}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            поглажки
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pleasures;
import { useState } from "react";
import { Link } from "react-router-dom";

const Pleasures = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (text: string) => {
    setMessage(text);
    setShowMessage(true);
    
    // Auto hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
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
      
      {/* Message popup */}
      {showMessage && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-fade-in">
          <div 
            className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-2xl border border-white/30"
          >
            <p 
              className="text-2xl md:text-3xl text-gray-800 text-center font-medium"
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
            className="bg-pink-200/80 backdrop-blur-sm border border-pink-300/50 text-pink-900 px-12 py-4 rounded-full text-xl font-medium hover:bg-pink-200/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            поцеловашки
          </button>
          
          <button
            onClick={() => handleButtonClick("обнимаю, КРЕПКО ПРИ КРЕПКО!")}
            className="bg-yellow-200/80 backdrop-blur-sm border border-yellow-300/50 text-yellow-900 px-12 py-4 rounded-full text-xl font-medium hover:bg-yellow-200/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            обнимашки
          </button>
          
          <button
            onClick={() => handleButtonClick("глажу глажу!")}
            className="bg-green-200/80 backdrop-blur-sm border border-green-300/50 text-green-900 px-12 py-4 rounded-full text-xl font-medium hover:bg-green-200/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            поглажки
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pleasures;
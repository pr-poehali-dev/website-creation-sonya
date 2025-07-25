import { Link } from "react-router-dom";

const Repentance = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-purple-900 to-indigo-900">
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 text-white/60 hover:text-white transition-colors text-sm"
      >
        ← назад
      </Link>
      
      <div className="text-center text-white px-4">
        <h1 
          className="text-4xl md:text-6xl mb-8"
          style={{ 
            fontFamily: 'Cormorant, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          раскаянье
        </h1>
        <p className="text-lg opacity-80">
          страница в разработке
        </p>
      </div>
    </div>
  );
};

export default Repentance;
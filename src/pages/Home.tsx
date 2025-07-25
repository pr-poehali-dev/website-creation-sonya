import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div 
      className="min-h-screen relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/685d0e21-33aa-4361-8eca-07235e3f3944.jpeg')`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-16 animate-fade-in" 
            style={{ fontFamily: 'Cormorant, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          для прочтения Сони
        </h1>
        
        {/* Navigation buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link 
            to="/silence" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            войти в тишину
          </Link>
          
          <Link 
            to="/repentance" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            раскаянье
          </Link>
          
          <Link 
            to="/garden" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            садик
          </Link>
          
          <Link 
            to="/relaxation" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            расслабление
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
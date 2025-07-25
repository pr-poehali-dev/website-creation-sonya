import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/685d0e21-33aa-4361-8eca-07235e3f3944.jpeg')`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Central text */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <h1 
          className="text-6xl md:text-8xl font-light text-white text-center drop-shadow-2xl tracking-wide"
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          для прочтения Сони
        </h1>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row gap-6 p-8 relative z-10">
        <Button
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/95 text-slate-800 border-white/50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          войти в тишину
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/95 text-slate-800 border-white/50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          раскаянье
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/95 text-slate-800 border-white/50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          садик
        </Button>
      </div>
    </div>
  );
};

export default Index;
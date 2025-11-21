import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import coolCat from "../assets/b7eaa7c78c5ed010f34d3ae53613f19ef55cf55a.png";
import coolDog from "../assets/4400b38931169e3aa9f0c4c8187f3240c78b88c6.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(to bottom, #E9E6DF, #FCFBF9)` }}>
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="text-center flex flex-col items-center gap-8">
          <div className="inline-block">
            <div className="text-white px-6 py-2 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(34,26,19,0.3)]" style={{ backgroundColor: '#B46A55' }}>
              NOW LAUNCHING
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <h1 className="max-w-3xl" style={{ color: '#221A13', textShadow: '3px 3px 0px rgba(118, 193, 178, 0.3)', fontFamily: 'Aladin, cursive' }}>
              LocoMoco
            </h1>
            <p className="text-2xl" style={{ color: '#221A13', fontFamily: 'Aladin, cursive' }}>
              Catch the Vibe. Locally
            </p>
          </div>
          
          <p className="max-w-2xl border-4 p-6 shadow-[8px_8px_0px_0px_rgba(34,26,19,1)] bg-white" style={{ color: '#5E574E', borderColor: '#221A13' }}>
            The retro-cool way to track your stuff. Simple, fun, and totally rad. 
            No bloat, just vibes. 🌈
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a href="https://locomoco.top" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="text-white border-4 shadow-[6px_6px_0px_0px_rgba(34,26,19,1)] hover:shadow-[4px_4px_0px_0px_rgba(34,26,19,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                style={{ backgroundColor: '#76C1B2', borderColor: '#221A13' }}
              >
                GET STARTED
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Retro decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-40" style={{ backgroundColor: '#76C1B2' }} />
      <div className="absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-30" style={{ backgroundColor: '#B46A55' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 opacity-40" style={{ backgroundColor: '#E9E6DF' }} />
      
      {/* Cool mascots */}
      <div className="absolute top-20 left-4 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 opacity-90 hover:scale-110 transition-transform">
        <img src={coolCat} alt="Cool cat mascot" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-32 right-4 sm:right-32 w-16 h-16 sm:w-20 sm:h-20 opacity-90 hover:scale-110 transition-transform">
        <img src={coolDog} alt="Cool dog mascot" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
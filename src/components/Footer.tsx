import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white border-t-8" style={{ backgroundColor: '#221A13', borderColor: '#76C1B2' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="text-center space-y-4">
          <h3 style={{ color: '#76C1B2' }}>LocoMoco</h3>
          <p className="flex items-center justify-center gap-2" style={{ color: '#E9E6DF' }}>
            Made with <Heart className="h-4 w-4" style={{ color: '#B46A55', fill: '#B46A55' }} /> and retro vibes
          </p>
          <div className="flex justify-center gap-6" style={{ color: '#E9E6DF' }}>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>About</a>
            <span>•</span>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>Contact</a>
            <span>•</span>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>Privacy</a>
          </div>
          <p className="pt-4" style={{ color: '#5E574E' }}>
            © 2025 LocoMoco • Stay Groovy ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
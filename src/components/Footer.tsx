import React, { useState } from "react";
import { Heart } from "lucide-react";
import { PrivacyDialog } from "./PrivacyDialog";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="text-white border-t-8" style={{ backgroundColor: '#221A13', borderColor: '#76C1B2' }}>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center space-y-4">
            <h3 style={{ color: '#76C1B2', fontFamily: 'Aladin, cursive' }}>LocoMoco</h3>
            <p style={{ color: '#E9E6DF', fontFamily: 'Aladin, cursive' }}>
              Catch the Vibe. Locally.
            </p>
            <p className="flex items-center justify-center gap-2 pt-4" style={{ color: '#E9E6DF' }}>
              Made with <Heart className="h-4 w-4" style={{ color: '#B46A55', fill: '#B46A55' }} />
            </p>
            <div className="flex justify-center gap-6" style={{ color: '#E9E6DF' }}>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>About</a>
              <span>•</span>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>Contact</a>
              <span>•</span>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                style={{ color: '#E9E6DF' }}
              >
                Privacy
              </button>
            </div>
            <p className="pt-4" style={{ color: '#5E574E' }}>
              © 2025 LocoMoco 
            </p>
          </div>
        </div>
      </footer>
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
}
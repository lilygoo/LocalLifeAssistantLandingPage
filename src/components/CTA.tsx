import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 sm:py-28" style={{ background: `linear-gradient(135deg, #76C1B2, #B46A55)` }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <div className="bg-white border-4 p-10 shadow-[12px_12px_0px_0px_rgba(34,26,19,1)]" style={{ borderColor: '#221A13' }}>
          <h2 className="mb-6" style={{ color: '#221A13' }}>
            Ready to Catch the Vibe?
          </h2>
          <p className="mb-8" style={{ color: '#5E574E' }}>
            Join early access and be the first to unlock your city's hidden fun. ✌️
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-4 focus:ring-0 shadow-[4px_4px_0px_0px_rgba(34,26,19,1)]"
              style={{ borderColor: '#221A13' }}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="text-white border-4 shadow-[6px_6px_0px_0px_rgba(34,26,19,1)] hover:shadow-[3px_3px_0px_0px_rgba(34,26,19,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all whitespace-nowrap"
              style={{ backgroundColor: '#76C1B2', borderColor: '#221A13' }}
            >
              LET'S GO!
            </Button>
          </form>
          <p className="mt-6" style={{ color: '#5E574E' }}>
            No spam, just good vibes. 🌟
          </p>
        </div>
      </div>
    </section>
  );
}
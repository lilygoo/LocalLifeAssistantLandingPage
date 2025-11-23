import { Zap, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Super Fast",
    description: "Tell us your vibe → boom, plans appear.",
    bgColor: "#76C1B2",
  },
  {
    icon: Heart,
    title: "Easy Peasy",
    description: "No more tab-hopping or endless searches. Just pick and go.",
    bgColor: "#B46A55",
  },
  {
    icon: Sparkles,
    title: "Actually Fun",
    description: "After-work hang? Last-minute plan? Weekend adventure? Sorted.",
    bgColor: "#76C1B2",
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#E9E6DF' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="mb-4 text-2xl" style={{ color: '#221A13', textShadow: '2px 2px 0px rgba(118, 193, 178, 0.3)', fontFamily: 'Aladin, cursive' }}>
            Why It's Awesome
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border-4 p-8 shadow-[8px_8px_0px_0px_rgba(34,26,19,1)] hover:shadow-[4px_4px_0px_0px_rgba(34,26,19,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                style={{ borderColor: '#221A13' }}
              >
                <div 
                  className="mb-6 inline-flex rounded-full border-4 p-4"
                  style={{ backgroundColor: feature.bgColor, borderColor: '#221A13' }}
                >
                  <Icon className="h-8 w-8" style={{ color: '#221A13' }} />
                </div>
                <h3 className="mb-3" style={{ color: '#221A13' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#5E574E' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
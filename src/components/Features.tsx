import { Zap, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Super Fast",
    description: "Like dial-up, but actually fast. Lightning quick performance.",
    bgColor: "#76C1B2",
  },
  {
    icon: Heart,
    title: "Easy Peasy",
    description: "So simple, your grandma could use it. (We love grandmas.)",
    bgColor: "#B46A55",
  },
  {
    icon: Star,
    title: "Totally Rad",
    description: "Retro vibes meet modern tech. The best of both worlds.",
    bgColor: "#76C1B2",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: '#FCFBF9' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4" style={{ color: '#221A13', textShadow: '2px 2px 0px rgba(118, 193, 178, 0.3)' }}>
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
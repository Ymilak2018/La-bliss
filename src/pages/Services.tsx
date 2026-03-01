import { motion } from "motion/react";
import { Megaphone, Users, Star, Camera, ShoppingBag, Tv, CheckCircle2 } from "lucide-react";

const detailedServices = [
  {
    title: "Public Relations & Media Planning",
    description: "We craft narratives that capture the attention of top-tier editors and broadcast producers. Our strategic media planning ensures your brand is seen where it matters most.",
    features: ["Strategic Media Outreach", "Press Kit Development", "Crisis Management", "Media Training"],
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Influencer Marketing & Social Strategy",
    description: "Connecting your brand with authentic voices. We manage end-to-end influencer campaigns that drive engagement and build community trust.",
    features: ["Influencer Sourcing", "Campaign Management", "Content Strategy", "Performance Tracking"],
    icon: Users,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Celebrity Seeding",
    description: "Get your products into the hands of influential families. We leverage our deep connections in LA to create organic buzz through strategic gifting.",
    features: ["A-List Gifting", "Red Carpet Placements", "Organic Social Tags", "Brand Ambassadors"],
    icon: Star,
    image: "https://images.unsplash.com/photo-1511733334857-e82f66240821?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Branded Content Production",
    description: "Visual storytelling that reflects your brand's DNA. We produce high-end photography and video content tailored for the U.S. consumer.",
    features: ["Creative Direction", "Full-Scale Production", "Social-First Content", "Brand Guidelines"],
    icon: Camera,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Retail Placement & Logistics",
    description: "Navigating the U.S. retail landscape. We provide on-the-ground support for retail positioning and logistical distribution.",
    features: ["Retailer Outreach", "Pop-up Activations", "Warehousing Support", "Market Analysis"],
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "TV & Broadcast Promotions",
    description: "Widen your reach through national and local broadcast features. We secure segments that tell your story to millions.",
    features: ["Segment Pitching", "Product Integration", "Live Demonstrations", "B-Roll Production"],
    icon: Tv,
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b583?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">Our Services</h1>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            Strategic <span className="italic">U.S. Launch</span> Solutions.
          </h2>
          <p className="text-xl text-brand-ink/60 leading-relaxed">
            From initial market entry to long-term brand equity, we provide the tools and expertise needed to scale premium international brands.
          </p>
        </div>

        <div className="grid gap-12">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[40px] p-8 md:p-16 border border-brand-ink/5 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-brand-sage/5 flex items-center justify-center text-brand-sage mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6">{service.title}</h3>
                <p className="text-lg text-brand-ink/70 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium text-brand-ink/80">
                      <CheckCircle2 size={18} className="text-brand-gold" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

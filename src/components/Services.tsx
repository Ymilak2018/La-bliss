import { motion } from "motion/react";
import { Megaphone, Users, Star, Camera, ShoppingBag, Tv } from "lucide-react";

const services = [
  {
    title: "Public Relations & Media",
    description: "Strategic campaigns and media planning to build brand credibility and top-tier coverage.",
    icon: Megaphone,
  },
  {
    title: "Influencer & Social",
    description: "Partnerships with key opinion leaders and content strategies to grow community engagement.",
    icon: Users,
  },
  {
    title: "Celebrity Seeding",
    description: "Gifting products to high-profile families and arranging collaborations for organic buzz.",
    icon: Star,
  },
  {
    title: "Branded Content",
    description: "Production of high-impact photo and video content designed for design-led storytelling.",
    icon: Camera,
  },
  {
    title: "Retail Placement",
    description: "Support with retail positioning and logistical services for seamless U.S. distribution.",
    icon: ShoppingBag,
  },
  {
    title: "Broadcast Promotion",
    description: "Product features through broadcast media to widen reach across national audiences.",
    icon: Tv,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-serif leading-tight">
            Comprehensive solutions for <span className="italic">market dominance</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl border border-brand-ink/5 hover:border-brand-sage/20 hover:bg-brand-cream transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-sage/5 flex items-center justify-center text-brand-sage mb-8 group-hover:bg-brand-sage group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-brand-ink/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

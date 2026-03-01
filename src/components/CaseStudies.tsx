import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import stokkeImage from "../assets/ClikkHighChrFjrdBluAVSHF23_VND.jpg";

const caseStudies = [
  {
    title: "Nuna Baby Essentials",
    category: "Market Entry & PR",
    impact: "+45% Brand Awareness",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Stokke High Chairs",
    category: "Celebrity Seeding",
    impact: "12M+ Social Reach",
    image: stokkeImage,
  },
  {
    title: "Liewood Copenhagen",
    category: "Retail Placement",
    impact: "Sold Out in 48 Hours",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Selected Work</h2>
            <p className="text-4xl md:text-5xl font-serif leading-tight">
              Driving <span className="italic">measurable impact</span> for the world's finest brands.
            </p>
          </div>
          <button className="text-brand-sage font-bold uppercase tracking-widest text-xs border-b-2 border-brand-sage pb-1 hover:text-brand-ink hover:border-brand-ink transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="case-study-card aspect-[3/4]"
            >
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="overlay">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">{study.category}</p>
                    <h3 className="text-3xl font-serif">{study.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Impact</p>
                  <p className="text-xl font-serif font-bold">{study.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

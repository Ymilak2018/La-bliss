import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-sage/5 -z-10 rounded-l-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-brand-gold mb-6">
            <Star size={16} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">U.S. Market Entry Specialists</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            The U.S. Launchpad for <span className="italic text-brand-sage">Premium</span> Kids Brands.
          </h1>
          
          <p className="text-lg text-brand-ink/70 max-w-md mb-10 leading-relaxed">
            We help international high-end baby and kids’ brands enter and scale in the U.S. market with credibility, cultural relevance, and lasting brand equity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-sage text-white px-8 py-4 rounded-full font-medium hover:bg-brand-ink transition-all flex items-center gap-2">
              View Case Studies <ArrowRight size={18} />
            </button>
            <button className="border border-brand-ink/20 px-8 py-4 rounded-full font-medium hover:bg-brand-ink hover:text-white transition-all">
              Our Expertise
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-brand-ink/10 pt-8">
            <div>
              <p className="text-3xl font-serif font-bold">150+</p>
              <p className="text-xs uppercase tracking-widest text-brand-ink/50">Brands Launched</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">3.5B</p>
              <p className="text-xs uppercase tracking-widest text-brand-ink/50">Media Impressions</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">98%</p>
              <p className="text-xs uppercase tracking-widest text-brand-ink/50">Client Retention</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1000" 
              alt="Premium Baby Products" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-brand-ink/5"
          >
            <p className="text-sm font-serif italic mb-2">"LA Bliss didn't just launch us; they made us a household name for modern parents."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-sage/20" />
              <div>
                <p className="text-xs font-bold">Founder, Petit Luxe</p>
                <p className="text-[10px] text-brand-ink/50 uppercase tracking-tighter">Paris, France</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

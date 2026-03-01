import { motion } from "motion/react";
import Hero from "../components/Hero";
import ServicesPreview from "../components/Services";
import CaseStudiesPreview from "../components/CaseStudies";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Trust Section */}
      <section className="py-12 border-y border-brand-ink/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-brand-ink/40 mb-8 font-bold">Trusted by Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-2xl font-serif font-bold">NUNA</span>
            <span className="text-2xl font-serif font-bold">STOKKE</span>
            <span className="text-2xl font-serif font-bold">LIEWOOD</span>
            <span className="text-2xl font-serif font-bold">BUGABOO</span>
            <span className="text-2xl font-serif font-bold">CYBEX</span>
          </div>
        </div>
      </section>

      <ServicesPreview />
      
      <CaseStudiesPreview />

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-[20px] border-brand-cream shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Parenting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">Our Vision</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Building brands that <span className="italic">matter</span>.
            </h3>
            <p className="text-lg text-brand-ink/70 leading-relaxed mb-8">
              We don't just launch products; we cultivate legacies. Our approach ensures your brand resonates with the values of modern parents.
            </p>
            <Link to="/about" className="bg-brand-ink text-white px-8 py-4 rounded-full font-medium hover:bg-brand-sage transition-all inline-flex items-center gap-2">
              Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

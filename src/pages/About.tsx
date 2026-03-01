import { motion } from "motion/react";
import { Linkedin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">About LA Bliss</h1>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Your U.S. <span className="italic">Launchpad</span>.
            </h2>
            <p className="text-xl text-brand-ink/70 leading-relaxed mb-8">
              LA Bliss is a Los Angeles–based marketing and PR agency that specializes in helping international high-end kids’ and baby brands enter and grow in the U.S. market.
            </p>
            <p className="text-lg text-brand-ink/60 leading-relaxed">
              We don't chase one-off wins. We build brands people trust, remember, and return to. Our work sits at the intersection of modern parenting values, trust dynamics, and design-led storytelling.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="LA Bliss Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-brand-sage rounded-[60px] p-12 md:p-24 text-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Michael Douglas" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">The Founder</h3>
              <h4 className="text-4xl md:text-5xl font-serif mb-8">Michael Douglas</h4>
              <p className="text-xl text-white/80 leading-relaxed mb-8 italic">
                "As we continue to grow as an agency, we want our digital presence to better reflect our scale, expertise, and impact."
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                With over a decade of experience in the LA marketing scene, Michael founded LA Bliss to bridge the gap between premium international design and the nuanced U.S. parenting market.
              </p>
              <a 
                href="https://www.linkedin.com/in/madouglas/" 
                target="_blank" 
                className="inline-flex items-center gap-3 bg-white text-brand-sage px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all"
              >
                Connect on LinkedIn <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 relative overflow-hidden"
    >
      {/* Background Image Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-sage/5 -z-10 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1464852047516-e505419d235c?auto=format&fit=crop&q=80&w=1000" 
          alt="LA Skyline" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">Connect With Us</h1>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Let's build your <span className="italic">U.S. Legacy</span>.
            </h2>
            <p className="text-xl text-brand-ink/60 leading-relaxed mb-12">
              Whether you're ready to launch or just exploring the market, we're here to provide the strategic guidance you need.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-sage/5 flex items-center justify-center text-brand-sage">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-1">Email Us</p>
                  <p className="text-xl font-serif">hello@labliss.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-sage/5 flex items-center justify-center text-brand-sage">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-1">Call Us</p>
                  <p className="text-xl font-serif">+1 (310) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-sage/5 flex items-center justify-center text-brand-sage">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-ink/40 mb-1">Visit Us</p>
                  <p className="text-xl font-serif">Los Angeles, CA, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-brand-ink/5 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Full Name</label>
                  <input type="text" className="w-full bg-brand-cream border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-sage transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Email Address</label>
                  <input type="email" className="w-full bg-brand-cream border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-sage transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Company Name</label>
                <input type="text" className="w-full bg-brand-cream border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-sage transition-all" placeholder="Your Brand" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-ink/50">Message</label>
                <textarea rows={5} className="w-full bg-brand-cream border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-sage transition-all" placeholder="Tell us about your brand and goals..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-sage text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-ink transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

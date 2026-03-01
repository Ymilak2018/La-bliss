import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="font-serif text-4xl mb-8 tracking-tighter">LA BLISS</h2>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              A full-service PR and brand experience agency helping premium international baby and kids’ brands enter and scale in the U.S. market.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/madouglas/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-brand-gold">Navigation</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-brand-gold">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <span>hello@labliss.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 LA Bliss Agency. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

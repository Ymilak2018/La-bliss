import { motion } from "motion/react";
import { ArrowUpRight, Filter } from "lucide-react";

const allWork = [
  {
    title: "Nuna Baby Essentials",
    category: "Market Entry",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    title: "Stokke High Chairs",
    category: "Celebrity Seeding",
    image: "https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Liewood Copenhagen",
    category: "Retail Placement",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Bugaboo Strollers",
    category: "PR & Media",
    image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Cybex Luxury",
    category: "Influencer Strategy",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    title: "Done by Deer",
    category: "Branded Content",
    image: "https://images.unsplash.com/photo-1555252333-978fe317e602?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

export default function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-gold mb-6">Our Work</h1>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Case <span className="italic">Studies</span>.
            </h2>
          </div>
          <div className="flex items-center gap-4 border border-brand-ink/10 px-6 py-3 rounded-full text-sm font-medium">
            <Filter size={16} />
            <span>Filter by Category</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allWork.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`case-study-card ${work.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[3/4]'}`}
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="overlay">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">{work.category}</p>
                    <h3 className="text-3xl font-serif">{work.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

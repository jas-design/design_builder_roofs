import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ZoomIn, Search, Hammer, Building, MapPin, 
  ShieldCheck, ChevronLeft, ChevronRight, Star
} from 'lucide-react';
import { cn } from './lib/utils';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    id: 1,
    category: 'Residential',
    title: 'Modern Shingle Install',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Warehouse TPO Restoration',
    location: 'Orlando, FL',
    image: 'https://images.unsplash.com/photo-1632759162125-f0ea775c7471?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    category: 'Repair',
    title: 'Emergency Storm Repair',
    location: 'Tampa, FL',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Spanish Tile Excellence',
    location: 'Coral Gables, FL',
    image: 'https://images.unsplash.com/photo-1508333706533-1ec43ecb391d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Traditional Slate Finish',
    location: 'Naples, FL',
    image: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Retail Center Metal Roof',
    location: 'Fort Lauderdale, FL',
    image: 'https://images.unsplash.com/photo-1510113645371-d8ec88b907c1?auto=format&fit=crop&q=80&w=1200'
  }
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Repair'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-primary py-32 px-4 text-white relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img 
              src="https://images.unsplash.com/photo-1628178652422-9449852079f8?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-1 bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">OUR PORTFOLIO</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              Featured Projects
            </h1>
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase justify-center md:justify-start">
               <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
               <span className="text-white/30">/</span>
               <span className="text-secondary">Gallery</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
             {CATEGORIES.map(cat => (
                <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={cn(
                      "px-8 py-3 font-bold text-xs uppercase tracking-widest transition-all skew-slant border border-white/10",
                      filter === cat ? "bg-secondary text-white border-secondary" : "bg-white/5 text-white hover:bg-white/10"
                   )}
                >
                   {cat}
                </button>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative cursor-pointer aspect-square overflow-hidden border border-slate-100"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                     <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                     <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-4 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                     <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center skew-slant transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <ZoomIn size={24} />
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-40 text-center">
               <Search size={64} className="mx-auto text-slate-200 mb-6" />
               <p className="text-2xl text-slate-400 font-black uppercase tracking-widest">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-secondary transition-colors z-[101]">
              <X size={48} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-6xl w-full bg-white flex flex-col lg:flex-row shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="lg:w-2/3 bg-slate-900 border-r border-slate-100">
                 <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover aspect-video lg:aspect-auto"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <div className="lg:w-1/3 p-12 space-y-8">
                 <div>
                    <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">{selectedProject.category}</span>
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tighter leading-none mb-6">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest border-b border-slate-100 pb-8">
                       <MapPin size={16} className="text-secondary" />
                       <span>{selectedProject.location}</span>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex gap-4 group">
                       <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all skew-slant">
                          <Hammer size={20} />
                       </div>
                       <div>
                          <h4 className="font-black text-primary text-sm uppercase">Full Replacement</h4>
                          <p className="text-xs text-slate-500">Premium asphalt shingle system.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 group">
                       <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-primary border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all skew-slant">
                          <ShieldCheck size={20} />
                       </div>
                       <div>
                          <h4 className="font-black text-primary text-sm uppercase">Lifetime Warranty</h4>
                          <p className="text-xs text-slate-500">Includes workmanship guarantee.</p>
                       </div>
                    </div>
                 </div>
                 
                 <Link 
                   to="/contact" 
                   className="w-full bg-secondary text-white py-5 font-bold uppercase tracking-widest text-xs skew-slant text-center block shadow-xl hover:bg-secondary-hover transition-colors"
                 >
                   REQUEST QUOTE | →
                 </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 px-4 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-32 z-0 hidden lg:block" />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
            <div className="lg:pr-20 space-y-8">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-1 bg-secondary" />
                 <span className="text-secondary font-bold text-xs tracking-widest uppercase">QUALITY WORK</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Real Transformations Visible From The Sky</h2>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <p className="text-4xl font-black text-secondary">300+</p>
                     <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Successful Projects</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-4xl font-black text-secondary">100%</p>
                     <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Client Satisfaction</p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" 
                 className="skew-slant shadow-2xl border-4 border-white object-cover aspect-video" 
                 referrerPolicy="no-referrer" 
               />
               <img 
                 src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=600" 
                 className="skew-slant shadow-2xl border-4 border-white pt-12 object-cover aspect-video" 
                 referrerPolicy="no-referrer" 
               />
            </div>
         </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { 
  Hammer, Wrench, Search, CloudLightning, Building2, 
  ShieldCheck, ChevronRight, Phone, CheckCircle2, 
  Home as HomeIcon, Star, Shield, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE } from './constants';
import { cn } from './lib/utils';

const SERVICES_DETAILED = [
  {
    id: 'repair',
    title: 'Expert Roof Repair',
    icon: Wrench,
    tag: 'REPAIR SERVICE',
    description: 'Stop leaks before they destroy your interior. We handle everything from single shingle replacement to major structural repairs.',
    points: ['Leak detection and source identification', 'Minor & major structural repairs', 'Fascia and soffit repair', 'Gutter cleaning and repair'],
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'replacement',
    title: 'Full Roof Installation',
    icon: Hammer,
    tag: 'INSTALLATION',
    description: 'A new roof is a massive investment. We make it easy with premium materials, expert installation, and iron-clad warranties.',
    points: ['Asphalt Shingle (Multiple styles)', 'Standing Seam Metal Roofing', 'Spanish & Concrete Tile', 'Flat Roof Systems (TPO/Modified Bitumen)'],
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'inspection',
    title: 'Roof Cornering & Maintenance',
    icon: Search,
    tag: 'MAINTENANCE',
    description: 'Knowledge is power. Our thorough inspections give you a complete picture of your roof\'s health and estimated lifespan.',
    points: ['Post-storm damage assessments', 'Pre-purchase real estate inspections', 'Insurance certification (4-Point/Wind Mit)', 'Annual maintenance checkups'],
    image: 'https://images.unsplash.com/photo-1673645652590-9d21295bf4ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'storm',
    title: 'Storm Damage Recovery',
    icon: CloudLightning,
    tag: 'RESTORATION',
    description: 'Florida weather is unpredictable. We specialize in fast recovery and direct insurance coordination after wind and hail events.',
    points: ['Emergency tarping and secauration', 'Hail damage identification', 'Insurance claim documentation', 'Complete storm restoration'],
    image: 'https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-primary py-32 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img 
              src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-1 bg-secondary" />
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">WHAT WE DO</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Our Roofing Services
          </h1>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
             <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
             <span className="text-white/30">/</span>
             <span className="text-secondary">Services</span>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
           <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">SERVICE ADVANTAGES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none">
                Delivering High Quality Roof Services
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is ipsum less normal distribution of letters.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                 {[
                   "Accurate Testing Processes",
                   "300+ Successful Projects done",
                   "100% Satisfaction Guarantee",
                   "Professional Engineers Provide"
                 ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-primary">
                      <CheckCircle2 size={12} className="text-secondary" /> {text}
                    </div>
                 ))}
              </div>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <div className="bg-slate-50 p-10 border border-slate-100 skew-slant shadow-sm hover:border-secondary transition-colors group text-center">
                    <Shield size={32} className="text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-black text-primary uppercase text-xs">Certified Material</h4>
                 </div>
                 <div className="bg-primary p-10 border border-white/10 skew-slant shadow-xl text-center">
                    <Star size={32} className="text-secondary mx-auto mb-4" />
                    <h4 className="font-black text-white uppercase text-xs">Expert Engineers</h4>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-secondary p-10 skew-slant shadow-xl text-center">
                    <Hammer size={32} className="text-white mx-auto mb-4" />
                    <h4 className="font-black text-white uppercase text-xs">Modern Equipment</h4>
                 </div>
                 <div className="bg-slate-50 p-10 border border-slate-100 skew-slant shadow-sm hover:border-secondary transition-colors group text-center">
                    <Clock size={32} className="text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-black text-primary uppercase text-xs">24/7 Support</h4>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services detailed detail */}
      <section className="pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES_DETAILED.map((service, i) => (
            <div key={service.id} className={cn(
              "flex flex-col gap-12 items-center",
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}>
              <div className="flex-1 space-y-8">
                 <div className="flex items-center gap-2">
                    <div className="w-10 h-1 bg-secondary" />
                    <span className="text-secondary font-bold text-xs tracking-widest uppercase">{service.tag}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none">{service.title}</h2>
                 <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.points.map((point, j) => (
                       <li key={j} className="flex items-center gap-3 text-primary font-bold text-[10px] uppercase">
                          <CheckCircle2 size={12} className="text-secondary shrink-0" />
                          {point}
                       </li>
                    ))}
                 </ul>
                 <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs skew-slant hover:bg-slate-800 transition-colors inline-block"
                    >
                      GET A QUOTE | →
                    </Link>
                 </div>
              </div>
              <div className="flex-1 w-full max-w-lg aspect-square relative z-10">
                 <div className="absolute inset-0 bg-primary/5 -skew-x-12 translate-x-4 translate-y-4 -z-10" />
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover skew-slant shadow-2xl border-4 border-white"
                    referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Banner matches About CTA style */}
      <section className="py-24 bg-primary px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 -skew-x-12 translate-x-10" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase text-white/50">PROFESSIONAL WORK</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Commercial roofing specialists<br />for large scale projects.
             </h2>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
             <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-4 bg-secondary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs skew-slant hover:bg-secondary-hover transition-colors">
                CALL US NOW | →
             </a>
             <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Quick Contact</p>
                <p className="text-2xl font-black">+208-555-0112</p>
             </div>
          </div>
        </div>
      </section>

      {/* Material Partners */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-2xl font-black text-primary uppercase tracking-widest">Our Material Partners</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
             {["GAF Master Elite", "Owens Corning", "Tamko Building", "Metal Sales", "Tile Masters"].map((n, i) => (
                <div key={i} className="font-black text-2xl uppercase tracking-tighter">{n}</div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

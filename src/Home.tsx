import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Star, Clock, MapPin, ChevronRight, ChevronLeft, 
  CheckCircle2, Phone, Hammer, Wrench, Search, 
  CloudLightning, Facebook, Instagram, Twitter, Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from './lib/utils';
import { SERVICES, TESTIMONIALS, COMPANY_PHONE } from './constants';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2000',
    tag: 'PROVIDE THE BEST SERVICES',
    title: 'Our Best Roofing Services & Consulting',
    subtitle: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.'
  }
];

const SERVICE_TABS = [
  { 
    name: 'Modified Roofing', 
    title: 'Modified Roofing Systems',
    description: 'Our modified roofing solutions provide superior durability and weather resistance, specifically designed for the South Florida climate.',
    image: 'https://images.unsplash.com/photo-1632759162125-f0ea775c7471?auto=format&fit=crop&q=80&w=800',
    features: ["UV Resistant Coating", "Triple-Layer Protection", "Energy Efficient Options"]
  },
  { 
    name: 'Roof Installation', 
    title: 'Professional Roof Installation',
    description: 'Full roof installation services for residential properties. We use only Miami-Dade approved materials and follow strict safety protocols.',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800',
    features: ["Precision Workmanship", "Complete Site Cleanup", "Manufacturer Warranties"]
  },
  { 
    name: 'Roof Cornering', 
    title: 'Expert Roof Cornering',
    description: 'Detailed cornering and flashing work to prevent leaks at the most vulnerable points of your roofing system.',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800',
    features: ["Custom Flashing", "Impact Reinforcement", "Seamless Integration"]
  },
  { 
    name: 'Roof Renovation', 
    title: 'Comprehensive Roof Renovation',
    description: 'Breathe new life into your existing roof with our expert renovation services, extending its lifespan and improving curb appeal.',
    image: 'https://images.unsplash.com/photo-1449156001931-859bbbad1e31?auto=format&fit=crop&q=80&w=800',
    features: ["Structural Assessment", "Gutter Maintenance", "Surface Restoration"]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={HERO_SLIDES[currentSlide].image} 
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-secondary" />
              <span className="text-white font-bold text-xs tracking-widest uppercase">{HERO_SLIDES[currentSlide].tag}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-slate-300 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/services" className="bg-secondary hover:bg-secondary-hover text-white px-8 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-2 skew-slant">
                View Services <ChevronRight size={16} />
              </Link>
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-primary" />
                 ))}
                 <div className="pl-4">
                    <p className="text-white font-bold text-sm">Satisfied Clients</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Accents */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-secondary skew-y-6 translate-y-12 translate-x-12 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-32 h-2 bg-secondary/30 rotate-45" />

        {/* Social Rail */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 px-6 hidden lg:flex">
          <p className="writing-vertical-rl text-[10px] text-white font-bold uppercase tracking-[0.4em] mb-4 opacity-50">Follow Us</p>
          <div className="h-20 w-px bg-white/20" />
          <Facebook className="text-white hover:text-secondary cursor-pointer transition-colors" size={16} />
          <Twitter className="text-white hover:text-secondary cursor-pointer transition-colors" size={16} />
          <Linkedin className="text-white hover:text-secondary cursor-pointer transition-colors" size={16} />
          <Instagram className="text-white hover:text-secondary cursor-pointer transition-colors" size={16} />
        </div>
      </section>

      {/* Feature Cards overlap */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { icon: Hammer, title: 'Expert Engineer', desc: 'Nullam dictum ut est nune of malesuada ornare is aliquarn eget lacinia mauris.' },
            { icon: Shield, title: 'Quality Material', desc: 'Nullam dictum ut est nune of malesuada ornare is aliquarn eget lacinia mauris.' },
            { icon: Clock, title: '24/7 Support', desc: 'Nullam dictum ut est nune of malesuada ornare is aliquarn eget lacinia mauris.' },
            { icon: Wrench, title: 'Roof Renovation', desc: 'Nullam dictum ut est nune of malesuada ornare is aliquarn eget lacinia mauris.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border-b-2 border-transparent hover:border-secondary transition-all group flex flex-col shadow-xl">
              <item.icon size={40} className="text-secondary mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-black text-primary mb-4 leading-tight uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="mt-auto h-1 w-10 bg-secondary/10 group-hover:bg-secondary transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1542665952-13203aad399b?auto=format&fit=crop&q=80&w=800" className="rounded-sm shadow-2xl skew-slant" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 text-white shadow-2xl skew-slant">
                <p className="text-4xl font-black">10+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none">World Best Roofing<br />Winner List</p>
              </div>
            </div>
            <div className="absolute -top-10 right-0 w-48 h-48 bg-primary/5 rounded-full border border-primary/10 -z-10" />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-1 bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] uppercase tracking-tighter">
              Devoted to Delivering Top Notch Roofing Solutions
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm">
              It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is ipsum less normal distribution of letters.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Accurate Testing Processes",
                "300+ Successful Projects done",
                "100% Satisfaction Guarantee",
                "Professional Engineers Provide",
                "Award Winning Company",
                "Damage Roofing Repair"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-primary">
                  <CheckCircle2 size={12} className="text-secondary" /> {text}
                </div>
              ))}
            </div>
            <div className="pt-8 flex flex-wrap gap-10 items-center">
              <Link to="/about" className="bg-secondary hover:bg-secondary-hover text-white px-10 py-5 font-bold uppercase tracking-widest text-xs skew-slant">
                ABOUT US <ChevronRight size={14} />
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                   <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Call Us Now</p>
                  <p className="font-black text-primary text-xl">+208-555-0112</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs section */}
      <section className="py-24 px-4 bg-slate-50 bg-grid-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">WHAT WE DO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-none">Delivering High Quality Roof Services</h2>
            </div>
            <Link to="/services" className="bg-primary text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest skew-slant">
              ALL SERVICES | →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-2">
              {SERVICE_TABS.map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "w-full px-8 py-6 flex justify-between items-center text-left font-black uppercase tracking-widest text-sm transition-all shadow-sm",
                    activeTab === i ? "bg-secondary text-white skew-slant scale-105" : "bg-white text-primary border border-slate-100 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                     {activeTab === i ? <Hammer size={20} /> : <div className="w-5 h-5 border-2 border-primary/20 rounded-full" />}
                     {item.name}
                  </div>
                  <ChevronRight />
                </button>
              ))}
            </div>
            <div className="lg:col-span-2 bg-white p-12 rounded-sm shadow-xl flex flex-col md:flex-row gap-12 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-12 items-center"
                >
                  <img 
                    src={SERVICE_TABS[activeTab].image} 
                    alt={SERVICE_TABS[activeTab].title}
                    className="md:w-1/2 rounded-sm h-[300px] object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="md:w-1/2 space-y-6">
                    <h3 className="text-2xl font-black text-primary uppercase">{SERVICE_TABS[activeTab].title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {SERVICE_TABS[activeTab].description}
                    </p>
                    <div className="space-y-3">
                       {SERVICE_TABS[activeTab].features.map((text, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-primary">
                            <CheckCircle2 size={12} className="text-secondary" /> {text}
                          </div>
                       ))}
                    </div>
                    <Link 
                      to="/services" 
                      className="inline-block bg-secondary text-white px-10 py-5 text-[10px] font-bold uppercase tracking-widest skew-slant hover:bg-secondary-hover transition-colors"
                    >
                      READ MORE | →
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Hammer, val: '300+', label: 'Successfully Projects' },
            { icon: Star, val: '450+', label: 'Company Staffs' },
            { icon: Shield, val: '3,150', label: 'Tons Of Products' },
            { icon: Clock, val: '6,561', label: 'Satisfied Clients' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
               <div className="text-secondary"><item.icon size={48} /></div>
               <div>
                  <h4 className="text-4xl font-black text-primary leading-none mb-2">{item.val}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking and Testimonials */}
      <section className="py-24 px-4 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-20 z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
           <div className="bg-secondary p-12 shadow-2xl skew-slant">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-1 bg-white" />
                <span className="text-white font-bold text-xs tracking-widest uppercase">BOOK APPOINTMENT</span>
              </div>
              <h2 className="text-3xl font-black text-white uppercase mb-8">Roofing Services Available</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white px-6 py-4 outline-none font-medium placeholder:text-slate-400" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Your Email" className="w-full bg-white px-6 py-4 outline-none font-medium placeholder:text-slate-400" />
                  <input type="tel" placeholder="Your Phone" className="w-full bg-white px-6 py-4 outline-none font-medium placeholder:text-slate-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full bg-white px-6 py-4 outline-none font-medium text-slate-400">
                    <option>Location</option>
                  </select>
                  <input type="date" className="w-full bg-white px-6 py-4 outline-none font-medium text-slate-400" />
                </div>
                <button className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
                  Submit Request
                </button>
              </form>
           </div>
           <div className="space-y-12 lg:pl-20">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-1 bg-secondary" />
                  <span className="text-secondary font-bold text-xs tracking-widest uppercase">TESTIMONIALS</span>
                </div>
                <h2 className="text-4xl font-black text-primary uppercase">Clients Feedback</h2>
              </div>
              <div className="bg-slate-50 p-12 rounded-sm border border-slate-100 relative">
                 <div className="absolute -top-6 left-12 w-12 h-12 bg-secondary flex items-center justify-center text-white">
                    <Star fill="currentColor" />
                 </div>
                 <p className="text-slate-500 italic leading-relaxed mb-10">
                   "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is ipsum less normal distribution of letters."
                 </p>
                 <div className="flex items-center gap-6">
                    <img src="https://i.pravatar.cc/150?u=9" className="w-16 h-16 rounded-full grayscale" />
                    <div>
                       <h4 className="font-black text-primary text-lg uppercase tracking-tight leading-none mb-1">Kathryn Murphy</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engineering</p>
                    </div>
                 </div>
                 <div className="absolute top-12 right-12 opacity-10"><Hammer size={60} /></div>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                  <ChevronLeft />
                </button>
                <button className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                  <ChevronRight />
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Quick Help Call */}
      <section className="py-24 bg-primary px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1449156001437-3a16d1dfbc7a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Need Any Roofing Help?</h2>
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
            <input type="text" placeholder="Your Name" className="flex-grow bg-white/10 border border-white/20 px-8 py-5 text-white outline-none font-medium placeholder:text-white/40" />
            <input type="tel" placeholder="Your Phone" className="flex-grow bg-white/10 border border-white/20 px-8 py-5 text-white outline-none font-medium placeholder:text-white/40" />
            <button className="bg-secondary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-secondary-hover transition-colors skew-slant">
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </section>

      {/* Animated Text Banner */}
      <div className="py-12 bg-white overflow-hidden whitespace-nowrap border-y border-slate-100 flex gap-10 items-center">
         {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-10 items-center animate-scroll">
              <span className="text-6xl md:text-9xl font-black text-transparent stroke-1 stroke-slate-200 uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #f1f5f9' }}>ROOF RENOVATION</span>
              <div className="w-10 h-10 bg-secondary skew-x-12" />
              <span className="text-6xl md:text-9xl font-black text-primary uppercase tracking-tighter">MODIFIED ROOFING</span>
              <div className="w-10 h-10 border-4 border-slate-200 skew-x-12" />
            </div>
         ))}
      </div>
    </div>
  );
}

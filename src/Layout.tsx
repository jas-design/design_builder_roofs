import { useState, useEffect, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Menu, X, Facebook, Instagram, Twitter, ChevronRight, Hammer } from 'lucide-react';
import { cn } from './lib/utils';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from './constants';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-[#0f1425] text-white py-2 px-4 hidden lg:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
               <Phone size={14} className="text-secondary" /> {COMPANY_PHONE}
            </div>
            <div className="flex items-center gap-2">
               <Mail size={14} className="text-secondary" /> {COMPANY_EMAIL}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-secondary" /> {COMPANY_ADDRESS}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="opacity-70">Follow Us:</span>
            <div className="flex gap-4">
              <Facebook size={14} className="cursor-pointer hover:text-secondary transition-colors" />
              <Instagram size={14} className="cursor-pointer hover:text-secondary transition-colors" />
              <Twitter size={14} className="cursor-pointer hover:text-secondary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-[#0f1425] shadow-lg py-3" : "bg-[#151a2d] py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center">
              <div className="relative w-12 h-12 bg-[#2B3A93] flex items-center justify-center overflow-hidden border-2 border-[#CE502A]">
                 {/* Diagonal Lines */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-[150%] h-0.5 bg-white -rotate-45" />
                 </div>
                 <span className="text-2xl font-black text-[#CE502A] italic tracking-tighter relative z-10 select-none" style={{ textShadow: '1px 1px 0px white' }}>dbr</span>
              </div>
              <div className="ml-3 flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-secondary transition-colors uppercase">Design</span>
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-secondary transition-colors uppercase">Builder</span>
                <span className="text-xl font-black tracking-tighter text-secondary uppercase">Roofs</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  cn(
                    "relative font-bold text-sm uppercase tracking-wider transition-colors hover:text-secondary",
                    isActive ? "text-secondary" : "text-white"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
               <Link 
                to="/contact" 
                className="bg-secondary text-white px-7 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-secondary-hover transition-all"
               >
                Get A Quote
              </Link>
              <div className="h-10 w-px bg-white/10 mx-2" />
              <div className="flex flex-col items-end">
                 <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Call Us Now</span>
                 <a href={`tel:${COMPANY_PHONE}`} className="text-white font-bold text-sm">+208-555-0112</a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      cn(
                        "text-lg font-semibold py-2 transition-colors",
                        isActive ? "text-primary border-l-4 border-secondary pl-3" : "text-slate-600"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col gap-4">
                  <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-3 text-primary font-bold">
                    <Phone size={20} /> {COMPANY_PHONE}
                  </a>
                  <Link to="/contact" className="bg-secondary text-white text-center py-4 rounded-xl font-bold shadow-lg">
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1425] text-white pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 bg-[#2B3A93] flex items-center justify-center overflow-hidden border-2 border-[#CE502A]">
                     <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-[150%] h-0.5 bg-white -rotate-45" />
                     </div>
                     <span className="text-xl font-black text-[#CE502A] italic tracking-tighter relative z-10 select-none" style={{ textShadow: '1px 1px 0px white' }}>dbr</span>
                  </div>
                  <div className="ml-3 flex flex-col leading-none">
                    <span className="text-lg font-black tracking-tighter text-white uppercase transition-colors group-hover:text-secondary">Design</span>
                    <span className="text-lg font-black tracking-tighter text-white uppercase transition-colors group-hover:text-secondary">Builder</span>
                    <span className="text-lg font-black tracking-tighter text-secondary uppercase">Roofs</span>
                  </div>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia malesuada ornare is sodales consequat curabitur lacinia mollis.
              </p>
              <div className="space-y-2">
                 <p className="text-sm font-bold">Working Hours:</p>
                 <p className="text-xs text-slate-500">Mon - Sat: 10:00AM - 4:00PM</p>
                 <p className="text-xs text-slate-500">Sunday: Close</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-secondary pl-4">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-secondary transition-colors flex items-center gap-2">
                      <ChevronRight size={14} className="text-secondary" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-secondary pl-4">Our Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> Damage Roofing</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> Roof Repair</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> Roof Installation</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> Roof Animation</Link></li>
                <li><Link to="/services" className="hover:text-secondary transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> Modified Roofing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-secondary pl-4">Our Gallery</h4>
              <div className="grid grid-cols-3 gap-2">
                 {[
                   '1635424710928-0544e8512eae',
                   '1632759162125-f0ea775c7471',
                   '1510113645371-d8ec88b907c1',
                   '1508333706533-1ec43ecb391d',
                   '1620608535234-a69492160671',
                   '1621259182978-fbf93132d53d'
                 ].map((id, i) => (
                    <div key={i} className="aspect-square bg-slate-800 rounded-sm overflow-hidden group">
                       <img 
                          src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=200`} 
                          alt="Gallery" 
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                       />
                    </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
            <p>© All Copyright 2026 by Design Builder</p>
            <div className="flex gap-4">
               <div className="p-2 border border-white/5 hover:bg-secondary hover:text-white transition-colors"><Facebook size={12} /></div>
               <div className="p-2 border border-white/5 hover:bg-secondary hover:text-white transition-colors"><Twitter size={12} /></div>
               <div className="p-2 border border-white/5 hover:bg-secondary hover:text-white transition-colors"><Instagram size={12} /></div>
            </div>
            <div className="flex gap-6">
               <Link to="/" className="hover:text-white">Terms & Condition</Link>
               <Link to="/" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sticky CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a 
          href={`tel:${COMPANY_PHONE}`}
          className="w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone />
        </a>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { 
  ChevronRight, Award, Users, Target, CheckCircle2, 
  Star, ShieldCheck, Hammer, Clock, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_PHONE } from './constants';

export default function About() {
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
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">WHO WE ARE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            About {COMPANY_NAME}
          </h1>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
             <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
             <span className="text-white/30">/</span>
             <span className="text-secondary">About Us</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
             <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=1200" 
                  className="rounded-sm shadow-2xl skew-slant" 
                  alt="Roofing Team"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-secondary p-10 text-white shadow-2xl hidden md:block skew-slant">
                   <p className="text-5xl font-black">15+</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Years of Working<br />Experience</p>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 -z-10 skew-x-12" />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-widest uppercase">OUR STORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] uppercase tracking-tighter">
                Decades of Roofing Excellence Built on Trust
              </h2>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is ipsum less normal distribution of letters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { title: 'Certified Material', icon: Shield },
                 { title: 'Expert Engineers', icon: Hammer },
                 { title: '24/7 Support', icon: Clock },
                 { title: 'Quality Services', icon: Star },
               ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-slate-100 items-center group hover:bg-slate-50 transition-colors">
                     <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <item.icon size={20} />
                     </div>
                     <h4 className="font-black text-primary text-sm uppercase">{item.title}</h4>
                  </div>
               ))}
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-10 items-center">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-secondary p-1">
                     <img 
                       src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" 
                       className="w-full h-full rounded-full object-cover" 
                       referrerPolicy="no-referrer"
                     />
                  </div>
                  <div>
                     <p className="font-black text-primary leading-none uppercase">Robert Miller</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">CEO & Founder</p>
                  </div>
               </div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_John_Hancock.svg" className="h-12 opacity-30 grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-6">
                <div className="w-16 h-1 bg-secondary" />
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Our Core Philosophy</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
                </p>
             </div>
             {[
                { title: 'Expert Team', desc: 'Indignation and dislike men who are so beguiled and demoralized charms of pleasure.' },
                { title: 'Quality Material', desc: 'Indignation and dislike men who are so beguiled and demoralized charms of pleasure.' }
             ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors skew-slant">
                   <h3 className="text-xl font-black text-white uppercase mb-4">{item.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-1 bg-secondary" />
              <span className="text-secondary font-bold text-xs tracking-widest uppercase">MEET OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter">The Professionals Behind the Protection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Robert Miller', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Elena Rodriguez', role: 'Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
              { name: 'Mark Peterson', role: 'Head Inspector', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Kathryn Murphy', role: 'Engineer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
            ].map((member, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden relative skew-slant mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-primary uppercase tracking-tight leading-none mb-1">{member.name}</h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-secondary px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/10 -skew-x-12 translate-x-10" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Work with us for the best<br />roofing experience.
             </h2>
          </div>
          <div className="flex flex-wrap gap-6 items-center">
             <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-4 bg-white text-primary px-10 py-5 font-bold uppercase tracking-widest text-xs skew-slant hover:bg-slate-50 transition-colors">
                CALL US NOW | →
             </a>
             <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Quick Contact</p>
                <p className="text-2xl font-black">+208-555-0112</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

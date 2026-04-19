import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, Clock, 
  ShieldCheck, CheckCircle2, Hammer, Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from './constants';
import { cn } from './lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-primary py-32 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-1 bg-secondary" />
            <span className="text-secondary font-bold text-xs tracking-widest uppercase">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
             <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
             <span className="text-white/30">/</span>
             <span className="text-secondary">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Sidebar Info */}
           <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                   <div className="w-10 h-1 bg-secondary" />
                   <span className="text-secondary font-bold text-xs tracking-widest uppercase">CONTACT US</span>
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Feel Free to Get In Touch</h2>
                 <p className="text-slate-500 text-sm leading-relaxed">
                   Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
                 </p>
              </div>

              <div className="space-y-4">
                 {[
                   { icon: Phone, title: 'Call Us Now', val: COMPANY_PHONE, color: 'text-secondary' },
                   { icon: Mail, title: 'Email Address', val: COMPANY_EMAIL, color: 'text-secondary' },
                   { icon: MapPin, title: 'Our Location', val: COMPANY_ADDRESS, color: 'text-secondary' },
                   { icon: Clock, title: 'Work Hours', val: 'Mon - Sat: 10AM - 4PM', color: 'text-secondary' },
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 border border-slate-100 group hover:border-secondary hover:bg-slate-50 transition-all">
                       <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all skew-slant">
                          <item.icon size={20} />
                       </div>
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                          <p className="font-black text-primary text-sm uppercase tracking-tight">{item.val}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Form Area */}
           <div className="lg:col-span-2 space-y-12 order-1 lg:order-2">
              <div className="bg-slate-50 p-8 md:p-16 rounded-sm border border-slate-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rotate-45 -mr-16 -mt-16 pointer-events-none" />
                 
                 {formState === 'success' ? (
                   <div className="py-20 text-center space-y-6">
                      <CheckCircle2 size={80} className="text-secondary mx-auto" />
                      <h2 className="text-3xl font-black text-primary uppercase">Request Sent Successfully!</h2>
                      <p className="text-slate-500 max-w-md mx-auto">Thank you for contacting us. Our roofing specialists will get back to you shortly.</p>
                      <button onClick={() => setFormState('idle')} className="text-secondary font-bold uppercase text-xs tracking-widest hover:underline">Send another message</button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input required type="text" placeholder="Your Name" className="w-full bg-white px-8 py-5 outline-none font-bold uppercase text-xs tracking-widest text-primary border border-transparent focus:border-secondary transition-colors" />
                         <input required type="email" placeholder="Your Email" className="w-full bg-white px-8 py-5 outline-none font-bold uppercase text-xs tracking-widest text-primary border border-transparent focus:border-secondary transition-colors" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <input required type="tel" placeholder="Your Phone" className="w-full bg-white px-8 py-5 outline-none font-bold uppercase text-xs tracking-widest text-primary border border-transparent focus:border-secondary transition-colors" />
                         <select className="w-full bg-white px-8 py-5 outline-none font-bold uppercase text-xs tracking-widest text-slate-400 border border-transparent focus:border-secondary transition-colors">
                            <option>Select Service</option>
                            <option>Roof Repair</option>
                            <option>Roof Installation</option>
                            <option>Roof Inspection</option>
                         </select>
                      </div>
                      <textarea rows={6} placeholder="Your Message" className="w-full bg-white px-8 py-5 outline-none font-bold uppercase text-xs tracking-widest text-primary border border-transparent focus:border-secondary transition-colors resize-none" />
                      <button type="submit" disabled={formState === 'submitting'} className="bg-secondary text-white px-12 py-6 font-bold uppercase tracking-widest text-xs skew-slant hover:bg-secondary-hover transition-colors shadow-2xl disabled:opacity-50">
                         {formState === 'submitting' ? 'SENDING...' : 'SUBMIT REQUEST | →'}
                      </button>
                   </form>
                 )}
              </div>

              {/* Stats/Badges Snippet */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                 {[
                   { icon: Hammer, val: '300+', label: 'Successful Projects' },
                   { icon: Star, val: '450+', label: 'Company Staff' },
                   { icon: ShieldCheck, val: '15+', label: 'Years Experience' },
                   { icon: CheckCircle2, val: '100%', label: 'Quality Guarantee' }
                 ].map((s, i) => (
                    <div key={i} className="text-center space-y-2">
                       <s.icon size={24} className="text-secondary mx-auto" />
                       <h4 className="text-2xl font-black text-primary leading-none uppercase">{s.val}</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-[500px] w-full bg-slate-100 grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-1000">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.5392591666!2d-80.299499!3d25.7823907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a1a1c1a1a1%3A0x1a1a1a1a1a1a1a1a!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            className="filter invert hue-rotate-180"
         />
      </section>

      {/* FAQ Snippet with Slanted Style */}
      <section className="py-24 px-4 bg-primary relative overflow-hidden">
         <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 skew-x-12 -translate-x-20 pointer-events-none" />
         <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <div className="text-center space-y-4">
               <div className="flex items-center justify-center gap-2">
                 <div className="w-10 h-1 bg-secondary" />
                 <span className="text-secondary font-bold text-xs tracking-widest uppercase">FAQ</span>
               </div>
               <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
               {[
                 { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in just 1-2 days, depending on the size and complexity." },
                 { q: "Do you offer financing?", a: "Yes! We have several flexible financing options available to fit your budget. Ask us during your quote." }
               ].map((faq, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 skew-slant">
                     <h4 className="font-black text-white text-lg uppercase tracking-tight mb-2 flex items-center gap-3">
                        <MessageCircle size={20} className="text-secondary" /> {faq.q}
                     </h4>
                     <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

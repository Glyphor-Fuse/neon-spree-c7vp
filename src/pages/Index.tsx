import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Menu } from '../components/Menu';
import { Space } from '../components/Space';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => (
  <footer id="visit" className="bg-zinc-950 text-zinc-50 pt-24 pb-12 px-6 md:px-12 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> VISIT US
          </h3>
          <p className="font-mono text-sm text-zinc-400">
            Torstraße 102<br />
            10119 Berlin<br />
            Germany
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-xs font-mono border-b border-transparent hover:border-white transition-colors mt-2">
            GET DIRECTIONS <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5" /> HOURS
          </h3>
          <ul className="font-mono text-sm text-zinc-400 space-y-2">
            <li className="flex justify-between w-32"><span>MON-FRI</span> <span>07-18</span></li>
            <li className="flex justify-between w-32"><span>SAT-SUN</span> <span>09-17</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5" /> CONTACT
          </h3>
          <p className="font-mono text-sm text-zinc-400">
            hello@werkstoff.de<br />
            +49 30 12345678
          </p>
          <div className="flex gap-4 mt-4">
             {/* Social placeholders */}
             <a href="#" className="w-8 h-8 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">IG</a>
             <a href="#" className="w-8 h-8 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">FB</a>
          </div>
        </div>

        <div className="space-y-4">
           <h3 className="font-bold text-xl mb-6">NEWSLETTER</h3>
           <form className="flex flex-col gap-2">
             <input 
               type="email" 
               placeholder="EMAIL ADDRESS" 
               className="bg-transparent border-b border-zinc-700 py-2 text-sm font-mono focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
             />
             <button className="self-start text-xs font-bold mt-2 hover:text-zinc-400 transition-colors">SUBSCRIBE</button>
           </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-900 pt-8">
        <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-zinc-900 select-none pointer-events-none">
          WERKSTOFF
        </h1>
        <div className="flex gap-8 text-[10px] font-mono text-zinc-600 mb-2 md:mb-6">
          <span>© 2024 WERKSTOFF BERLIN</span>
          <span>IMPRESSUM</span>
          <span>DATENSCHUTZ</span>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Manifesto Section */}
      <section className="py-24 px-6 md:px-12 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-4xl font-light leading-relaxed text-zinc-300"
          >
            "We strip away the unnecessary. Coffee is not a beverage; it is a ritual of precision. In the chaos of the city, we provide the fuel to keep moving."
          </motion.p>
        </div>
      </section>

      <Menu />
      <Space />
      <Footer />
    </div>
  );
};

export default Index;
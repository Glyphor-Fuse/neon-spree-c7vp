import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header ref={containerRef} className="relative h-screen w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-24 px-6 md:px-12">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-10" />
        <div className="w-full h-full grayscale contrast-125 brightness-75">
            {/* Using a dark, industrial coffee texture */}
           <img 
            src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/17680003/pexels-photo-17680003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A barista operates machinery at Starbucks Reserve Roastery, showcasing the coffee production process."
    width="6000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/a-worker-operating-a-laptop-17680003/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Declan Sun on Pexels
    </a>
  </div>
</div>" 
            alt="Roastery Interior" 
            className="w-full h-full object-cover"
           />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full mx-auto border-t border-zinc-800 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white mix-blend-difference"
            >
              FUEL FOR<br />THE GRIND
            </motion.h1>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:flex justify-end"
            >
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                <span className="text-[10px] font-mono">EST. 2024</span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm md:text-base text-zinc-400 max-w-xs font-mono self-end mt-8 md:mt-0"
            >
              // RAW MATERIALS
              <br />
              // PRECISION BREWING
              <br />
              // NO COMPROMISE
            </motion.p>
          </div>
        </div>
      </div>
    </header>
  );
};
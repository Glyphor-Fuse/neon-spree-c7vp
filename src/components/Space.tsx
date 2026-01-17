import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Space = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="space" ref={ref} className="py-24 bg-zinc-100 text-zinc-950 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-300 pb-8">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">THE LAB</h2>
          <p className="font-mono text-sm mt-4 md:mt-0 max-w-xs uppercase">
            Designed for focus. Stripped back to the essentials. Concrete, Steel, Light.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[120vh]">
          <motion.div style={{ y: y1 }} className="h-full w-full flex flex-col gap-8 pt-12">
            <div className="h-[60%] w-full bg-zinc-300 overflow-hidden">
               <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/33251467/pexels-photo-33251467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A modern, minimalist cafe interior featuring wooden furniture and potted plants."
    width="3000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/minimalist-cafe-interior-with-wooden-furniture-33251467/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Sapol Churanon on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover" alt="Interior 1" />
            </div>
            <div className="font-mono text-xs p-4 border border-zinc-300">
                LOC: BERLIN<br/>LAT: 52.5200° N<br/>LON: 13.4050° E
            </div>
          </motion.div>

          <div className="h-full w-full flex flex-col gap-8 justify-center">
             <div className="h-[50%] w-full bg-zinc-300 overflow-hidden">
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/5689498/pexels-photo-5689498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Barista creates intricate latte art in a coffee cup using a red pitcher for a delicious presentation."
    width="3512"
    height="4917"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/latte-art-on-brown-coffee-foam-5689498/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Daniel Tello on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover" alt="Barista Action" />
             </div>
             <p className="text-2xl font-bold tracking-tight leading-none indent-8">
                "WE BELIEVE IN THE PURITY OF THE PROCESS. NO DISTRACTIONS."
             </p>
          </div>

          <motion.div style={{ y: y2 }} className="h-full w-full flex flex-col gap-8 pb-12">
            <div className="h-[40%] w-full bg-zinc-300 overflow-hidden">
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/34645485/pexels-photo-34645485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Detailed view of an espresso machine's portafilter and controls, perfect for coffee enthusiasts."
    width="4000"
    height="6000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-of-a-professional-espresso-machine-34645485/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Peter Xie on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover" alt="Machine Detail" />
            </div>
             <div className="h-[40%] w-full bg-zinc-300 overflow-hidden">
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/4063792/pexels-photo-4063792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Two women collaborating on a project in a cozy café setting."
    width="3333"
    height="5000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/woman-in-pink-blazer-sitting-beside-woman-in-brown-blazer-4063792/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Marcus Aurelius on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover" alt="Vibe" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
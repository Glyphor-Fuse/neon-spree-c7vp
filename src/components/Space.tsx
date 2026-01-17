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
               <img src="https://images.pexels.com/photos/33251467/pexels-photo-33251467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" className="w-full h-full object-cover" alt="Interior 1" />
            </div>
            <div className="font-mono text-xs p-4 border border-zinc-300">
                LOC: BERLIN<br/>LAT: 52.5200° N<br/>LON: 13.4050° E
            </div>
          </motion.div>

          <div className="h-full w-full flex flex-col gap-8 justify-center">
             <div className="h-[50%] w-full bg-zinc-300 overflow-hidden">
                <img src="https://images.pexels.com/photos/5689498/pexels-photo-5689498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" className="w-full h-full object-cover" alt="Barista Action" />
             </div>
             <p className="text-2xl font-bold tracking-tight leading-none indent-8">
                "WE BELIEVE IN THE PURITY OF THE PROCESS. NO DISTRACTIONS."
             </p>
          </div>

          <motion.div style={{ y: y2 }} className="h-full w-full flex flex-col gap-8 pb-12">
            <div className="h-[40%] w-full bg-zinc-300 overflow-hidden">
                <img src="https://images.pexels.com/photos/34645485/pexels-photo-34645485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" className="w-full h-full object-cover" alt="Machine Detail" />
            </div>
             <div className="h-[40%] w-full bg-zinc-300 overflow-hidden">
                <img src="https://images.pexels.com/photos/4063792/pexels-photo-4063792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" className="w-full h-full object-cover" alt="Vibe" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
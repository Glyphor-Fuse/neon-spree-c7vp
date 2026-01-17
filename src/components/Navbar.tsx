import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-exclusion text-white pointer-events-none"
    >
      <div className="flex flex-col pointer-events-auto">
        <span className="text-xl font-bold tracking-tighter leading-none">WERKSTOFF</span>
        <span className="text-[10px] font-mono opacity-60 tracking-widest mt-1">BERLIN / MITTE</span>
      </div>

      <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest pointer-events-auto">
        {['ROAST', 'MENU', 'SPACE', 'VISIT'].map((item, i) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="relative group overflow-hidden"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {`0${i + 1} // ${item}`}
            </span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-zinc-400">
              {`0${i + 1} // ${item}`}
            </span>
          </a>
        ))}
      </div>

      <button className="md:hidden pointer-events-auto">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  );
};
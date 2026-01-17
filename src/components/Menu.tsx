import { motion } from 'framer-motion';

const DRINKS = [
  { name: "DOPIO RISTRETTO", price: "3.5", desc: "Double shot, short extraction. The essence." },
  { name: "FLAT WHITE", price: "4.2", desc: "Micro-foam, double shot. Velvet texture." },
  { name: "BATCH BREW", price: "3.0", desc: "Single origin, precision filtered. Clean." },
  { name: "COLD DRIP", price: "5.0", desc: "12 hour extraction. High caffeine, low acid." },
  { name: "OAT CORTADO", price: "4.0", desc: "Oatly barista edition. Balanced." },
];

const PASTRIES = [
  { name: "CARDAMOM KNOT", price: "4.5", desc: "Vegan. Sourdough base. Spicy." },
  { name: "MISO COOKIE", price: "3.5", desc: "Dark chocolate chunks. Umami finish." },
  { name: "BANANA BREAD", price: "4.0", desc: "Toasted, espresso butter. Dense." },
];

export const Menu = () => {
  return (
    <section id="menu" className="py-32 px-6 md:px-12 bg-zinc-950 text-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Drinks Column */}
          <div>
            <div className="flex items-baseline justify-between border-b border-zinc-800 pb-4 mb-12">
              <h2 className="text-4xl font-bold tracking-tight">LIQUIDS</h2>
              <span className="font-mono text-xs text-zinc-500">[CAFFEINE]</span>
            </div>
            
            <div className="space-y-8">
              {DRINKS.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-medium tracking-wide group-hover:text-zinc-400 transition-colors">{item.name}</h3>
                    <span className="font-mono text-sm text-zinc-500">{item.price}</span>
                  </div>
                  <p className="text-sm text-zinc-500 font-mono opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                    {`// ${item.desc}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pastries Column */}
          <div className="pt-12 md:pt-32">
             <div className="flex items-baseline justify-between border-b border-zinc-800 pb-4 mb-12">
              <h2 className="text-4xl font-bold tracking-tight">SOLIDS</h2>
              <span className="font-mono text-xs text-zinc-500">[SUSTENANCE]</span>
            </div>
            
            <div className="space-y-8">
              {PASTRIES.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name} 
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-medium tracking-wide group-hover:text-zinc-400 transition-colors">{item.name}</h3>
                    <span className="font-mono text-sm text-zinc-500">{item.price}</span>
                  </div>
                  <p className="text-sm text-zinc-500 font-mono opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                    {`// ${item.desc}`}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 p-6 border border-zinc-800 bg-zinc-900/30">
                <p className="font-mono text-xs text-zinc-400 leading-relaxed uppercase">
                    Our beans are sourced directly from sustainable micro-lots. Roasted weekly in Berlin-Kreuzberg. All pastries are 100% plant-based.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
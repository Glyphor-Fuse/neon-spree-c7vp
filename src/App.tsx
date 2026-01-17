import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-slate-50 selection:text-zinc-950">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;
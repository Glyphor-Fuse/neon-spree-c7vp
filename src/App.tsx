import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-slate-50 selection:text-zinc-950">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <GlyphorBadge />
      </div>
    </Router>
  );
}

export default App;
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-card/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-neon-pink font-arcade text-sm hover:text-neon-cyan transition-colors"
        >
          🏠 HOME
        </Link>
        <div className="text-gray-400 text-xs">
          REACT HOOKS BATTLE ROYALE
        </div>
      </div>
    </nav>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const battles = [
  {
    id: 1,
    title: 'useEffect vs useLayoutEffect',
    subtitle: 'The Party Dress-Up Dilemma',
    description: 'One changes in the bathroom at the party. The other changes at home before leaving.',
    color: 'from-pink-500 to-purple-500',
    icon: '🎭'
  },
  {
    id: 2,
    title: 'useMemo vs useCallback',
    subtitle: 'The Cake Baking Championship',
    description: 'Remembering the baked cake vs remembering the recipe.',
    color: 'from-cyan-500 to-blue-500',
    icon: '🎂'
  },
  {
    id: 3,
    title: 'useState vs useRef',
    subtitle: 'Classroom Info Wars',
    description: 'Public whiteboard vs secret diary. One shouts, one whispers.',
    color: 'from-green-500 to-emerald-500',
    icon: '📚'
  },
  {
    id: 4,
    title: 'useReducer vs useState',
    subtitle: 'Light Switch vs DJ Board',
    description: 'Simple toggle or full mixing console? Your bank account knows.',
    color: 'from-yellow-500 to-orange-500',
    icon: '🎛️'
  },
  {
    id: 5,
    title: 'useContext vs Prop Drilling',
    subtitle: 'Stadium Water Relay',
    description: 'Passing hand-to-hand vs a magical water fountain teleport.',
    color: 'from-red-500 to-pink-500',
    icon: '💧'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
    transition: { duration: 0.2 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg p-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-center mb-16 pt-8"
      >
        <h1 className="text-4xl md:text-6xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-green mb-4 drop-shadow-lg">
          ⚔️ REACT HOOKS ⚔️
        </h1>
        <h2 className="text-2xl md:text-4xl font-arcade text-white mb-6">
          BATTLE ROYALE
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Watch React hooks fight to the death! Learn through chaos, laughter, and slightly questionable analogies.
        </p>
        <div className="mt-4 text-neon-cyan text-sm">
          🔥 No hooks were harmed in the making of this app (but your brain might melt)
        </div>
      </motion.div>

      {/* Battle Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
      >
        {battles.map((battle) => (
          <motion.div
            key={battle.id}
            variants={cardVariants}
            whileHover="hover"
            className="relative group"
          >
            <Link to={`/battle/${battle.id}`}>
              <div className={`bg-gradient-to-br ${battle.color} p-1 rounded-2xl`}>
                <div className="bg-dark-card rounded-xl p-6 h-full relative overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${battle.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="text-5xl mb-4">{battle.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 font-arcade text-sm">
                    {battle.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className={`text-sm font-semibold bg-gradient-to-r ${battle.color} bg-clip-text text-transparent mb-3`}>
                    {battle.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {battle.description}
                  </p>
                  
                  {/* VS Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan flex items-center justify-center font-bold text-white text-xs shadow-lg">
                    VS
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-neon-cyan text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    ENTER BATTLE →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mt-16 pb-8 text-gray-500 text-sm"
      >
        <p>Made with 💜 and too much ☕</p>
        <p className="mt-2 text-neon-pink">Press Start to Continue...</p>
      </motion.footer>
    </div>
  );
}

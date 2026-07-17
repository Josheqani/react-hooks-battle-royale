import { motion } from 'framer-motion';

export default function BattleCard({ title, color, children, analogy }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-dark-card rounded-xl border border-dark-border overflow-hidden"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${color} px-4 py-3`}>
        <h3 className="font-arcade text-white text-sm">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {children}
      </div>
      
      {/* Analogy Box */}
      {analogy && (
        <div className="px-4 pb-4">
          <div className="bg-dark-bg rounded-lg p-3 border border-neon-purple/30">
            <div className="text-neon-purple text-xs font-bold mb-1">💡 ANALOGY:</div>
            <p className="text-gray-300 text-sm">{analogy}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

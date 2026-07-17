import { useEffect, useLayoutEffect, useState } from 'react';
import BattleCard from '../components/BattleCard';

export default function Battle1() {
  const [useEffectPosition, setUseEffectPosition] = useState('translate-x-96');
  const [useLayoutEffectPosition, setUseLayoutEffectPosition] = useState('translate-x-0');
  const [useEffectVisible, setUseEffectVisible] = useState(false);
  const [useLayoutEffectVisible, setUseLayoutEffectVisible] = useState(true);
  const [renderCount, setRenderCount] = useState(0);

  // useEffect version - shows flicker (changes after render)
  useEffect(() => {
    if (!useEffectVisible) {
      // First render off-screen
      setUseEffectPosition('translate-x-96 opacity-0');
      // Then move to position after a tiny delay (simulating the "bathroom change")
      setTimeout(() => {
        setUseEffectPosition('translate-x-0 opacity-100');
        setUseEffectVisible(true);
      }, 300);
    } else {
      // Toggle animation
      setUseEffectVisible(false);
      setUseEffectPosition('translate-x-96 opacity-0');
      setTimeout(() => {
        setUseEffectPosition('translate-x-0 opacity-100');
        setUseEffectVisible(true);
      }, 300);
    }
  }, [renderCount]);

  // useLayoutEffect version - instant change (changes before paint)
  useLayoutEffect(() => {
    if (!useLayoutEffectVisible) {
      setUseLayoutEffectPosition('translate-x-96 opacity-0');
      setTimeout(() => {
        setUseLayoutEffectPosition('translate-x-0 opacity-100');
        setUseLayoutEffectVisible(true);
      }, 0);
    } else {
      setUseLayoutEffectVisible(false);
      setUseLayoutEffectPosition('translate-x-96 opacity-0');
      setTimeout(() => {
        setUseLayoutEffectPosition('translate-x-0 opacity-100');
        setUseLayoutEffectVisible(true);
      }, 0);
    }
  }, [renderCount]);

  const handleToggle = () => {
    setRenderCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple mb-4">
            BATTLE 1: useEffect vs useLayoutEffect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click the button below and watch how each hook handles the DOM changes. 
            One flickers like a newbie, the other is smooth like a pro.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleToggle}
            className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg font-arcade text-white text-sm hover:shadow-lg hover:shadow-neon-pink/50 transition-all active:scale-95"
          >
            🎮 TOGGLE POSITION (Render #{renderCount})
          </button>
        </div>

        {/* Battle Arena */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* useEffect Side */}
          <BattleCard 
            title="🐌 useEffect" 
            color="from-pink-500 to-purple-500"
            analogy="Like changing clothes in the party bathroom - everyone sees you walk in awkward, then you emerge transformed."
          >
            <div className="h-40 bg-dark-bg rounded-lg border border-dark-border relative overflow-hidden flex items-center justify-center">
              <div 
                className={`w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-4xl transition-all duration-300 ${useEffectPosition}`}
              >
                🎭
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 font-mono">
              Runs AFTER paint → Causes visible flicker
            </div>
          </BattleCard>

          {/* useLayoutEffect Side */}
          <BattleCard 
            title="⚡ useLayoutEffect" 
            color="from-cyan-500 to-blue-500"
            analogy="Like changing at home before leaving - you arrive at the party already looking fabulous."
          >
            <div className="h-40 bg-dark-bg rounded-lg border border-dark-border relative overflow-hidden flex items-center justify-center">
              <div 
                className={`w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-4xl transition-all duration-75 ${useLayoutEffectPosition}`}
              >
                ✨
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 font-mono">
              Runs BEFORE paint → Smooth as butter
            </div>
          </BattleCard>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📖 THE TEA ☕</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-neon-pink font-bold mb-2">useEffect (The Bathroom Changer)</h4>
              <p className="text-gray-400 leading-relaxed">
                Runs <strong>after</strong> the browser paints. The user sees the initial state first, 
                then the update happens. Perfect for API calls, subscriptions, and anything that doesn't 
                need to block the visual update. Like sneaking to the bathroom at a party to fix your hair.
              </p>
            </div>
            <div>
              <h4 className="text-neon-cyan font-bold mb-2">useLayoutEffect (The Home Prepper)</h4>
              <p className="text-gray-400 leading-relaxed">
                Runs <strong>synchronously after DOM mutations but before paint</strong>. The browser 
                hasn't shown anything yet when this runs, so changes appear instant. Use for measurements, 
                animations, or anything that needs to look perfect from frame one. Like doing your whole 
                routine at home before anyone sees you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

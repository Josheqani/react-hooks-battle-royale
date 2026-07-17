import { useState, useRef } from 'react';
import BattleCard from '../components/BattleCard';

export default function Battle3() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const [, forceRender] = useState({});

  const handleStateIncrement = () => {
    setStateCount(prev => prev + 1);
  };

  const handleRefIncrement = () => {
    refCount.current += 1;
    // Notice: No re-render triggered!
  };

  const handleForceRender = () => {
    // Force a re-render to show the ref value
    forceRender({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-emerald mb-4">
            BATTLE 3: useState vs useRef
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One screams from the whiteboard. The other whispers in a secret diary. Both count stuff.
          </p>
        </div>

        {/* Battle Arena */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* useState Side */}
          <BattleCard 
            title="📢 useState (The Whiteboard)" 
            color="from-green-500 to-emerald-500"
            analogy="Like writing on the classroom whiteboard - EVERYONE sees it immediately. Triggers a re-render every time!"
          >
            <div className="space-y-4">
              <div className="bg-dark-bg rounded-lg p-6 border-2 border-neon-green flex flex-col items-center">
                <div className="text-gray-400 text-sm mb-2">Current Value:</div>
                <div className="text-6xl font-mono text-neon-green">{stateCount}</div>
                <div className="text-xs text-gray-500 mt-2">✨ Screen updates instantly!</div>
              </div>

              <button
                onClick={handleStateIncrement}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-green-500/50 transition-all active:scale-95"
              >
                📝 Add to Whiteboard (+1)
              </button>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                <div className="text-yellow-400 text-xs font-bold mb-1">⚠️ SIDE EFFECT:</div>
                <p className="text-gray-400 text-xs">
                  Every update triggers a full component re-render. Your entire component function runs again!
                </p>
              </div>
            </div>
          </BattleCard>

          {/* useRef Side */}
          <BattleCard 
            title="📔 useRef (The Secret Diary)" 
            color="from-purple-500 to-pink-500"
            analogy="Like writing in your private diary - nobody sees it unless you SHOW them. NO re-render!"
          >
            <div className="space-y-4">
              <div className="bg-dark-bg rounded-lg p-6 border-2 border-neon-purple flex flex-col items-center">
                <div className="text-gray-400 text-sm mb-2">Screen Shows:</div>
                <div className="text-6xl font-mono text-gray-600">???</div>
                <div className="text-xs text-gray-500 mt-2">🤐 Silent... no re-render!</div>
              </div>

              <button
                onClick={handleRefIncrement}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all active:scale-95"
              >
                🔒 Write in Diary (+1)
              </button>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                <div className="text-purple-400 text-xs font-bold mb-1">💡 SECRET POWER:</div>
                <p className="text-gray-400 text-xs">
                  Updates happen silently in the background. Perfect for timers, previous values, or DOM references!
                </p>
              </div>

              <button
                onClick={handleForceRender}
                className="w-full px-4 py-3 bg-dark-border rounded text-white text-sm hover:bg-dark-card transition-all border-dashed border-2"
              >
                👀 Peek at Diary (Force Re-render)
              </button>

              <div className="bg-dark-bg rounded p-3 border border-neon-purple">
                <div className="text-neon-purple text-xs font-bold mb-1">📖 Diary Entry:</div>
                <p className="text-gray-300 text-sm">
                  Current ref value: <span className="text-neon-purple font-mono text-lg">{refCount.current}</span>
                </p>
              </div>
            </div>
          </BattleCard>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📊 THE SHOWDOWN</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 px-4 text-gray-400">Feature</th>
                  <th className="text-center py-3 px-4 text-neon-green">useState</th>
                  <th className="text-center py-3 px-4 text-neon-purple">useRef</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-border">
                  <td className="py-3 px-4 text-gray-300">Triggers Re-render</td>
                  <td className="py-3 px-4 text-center"><span className="text-green-400">✅ Yes</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-red-400">❌ No</span></td>
                </tr>
                <tr className="border-b border-dark-border">
                  <td className="py-3 px-4 text-gray-300">Persists Between Renders</td>
                  <td className="py-3 px-4 text-center"><span className="text-green-400">✅ Yes</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-green-400">✅ Yes</span></td>
                </tr>
                <tr className="border-b border-dark-border">
                  <td className="py-3 px-4 text-gray-300">Mutable</td>
                  <td className="py-3 px-4 text-center"><span className="text-red-400">❌ No</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-green-400">✅ Yes</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-300">Best For</td>
                  <td className="py-3 px-4 text-center text-xs text-gray-400">UI state, user input</td>
                  <td className="py-3 px-4 text-center text-xs text-gray-400">Timers, DOM refs, previous values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📖 THE TEA ☕</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-neon-green font-bold mb-2">useState (The Attention Seeker)</h4>
              <p className="text-gray-400 leading-relaxed">
                When you update state, React <strong>must</strong> re-render to show the new value. 
                It's like posting on social media - everyone gets notified! Use this for anything that 
                affects what the user sees: counters, form inputs, toggles, etc.
              </p>
            </div>
            <div>
              <h4 className="text-neon-purple font-bold mb-2">useRef (The Introvert)</h4>
              <p className="text-gray-400 leading-relaxed">
                You can change <code className="bg-dark-bg px-1 rounded">.current</code> all day long 
                and React won't care. No re-renders, no drama. Perfect for storing things that need to 
                persist but shouldn't trigger updates: interval IDs, previous values, or direct DOM access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

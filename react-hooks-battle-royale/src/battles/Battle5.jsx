import { useState, createContext, useContext } from 'react';
import BattleCard from '../components/BattleCard';

// Create Context
const WaterContext = createContext(null);

// Deep nested component tree for prop drilling demo
const GrandchildWithProps = ({ water }) => (
  <div className="bg-red-500/20 border border-red-500/50 rounded p-4">
    <div className="text-xs text-red-400 font-bold mb-2">👶 Grandchild (with props)</div>
    <div className="text-white text-sm">💧 Water: {water}</div>
    <div className="text-xs text-gray-500 mt-1">Got water from parent!</div>
  </div>
);

const ChildWithProps = ({ water }) => (
  <div className="bg-red-500/20 border border-red-500/50 rounded p-4 space-y-3">
    <div className="text-xs text-red-400 font-bold">👦 Child (burdened with props)</div>
    <div className="text-gray-400 text-xs">"I don't even need this water, but I have to pass it down..."</div>
    <GrandchildWithProps water={water} />
  </div>
);

const ParentWithProps = ({ water }) => (
  <div className="bg-red-500/20 border border-red-500/50 rounded p-4 space-y-3">
    <div className="text-xs text-red-400 font-bold">👨 Parent (also burdened)</div>
    <div className="text-gray-400 text-xs">"Why am I holding this water bottle? I'm so thirsty..."</div>
    <ChildWithProps water={water} />
  </div>
);

// Context-based components
const GrandchildWithContext = () => {
  const water = useContext(WaterContext);
  return (
    <div className="bg-green-500/20 border border-green-500/50 rounded p-4">
      <div className="text-xs text-green-400 font-bold mb-2">👶 Grandchild (with context)</div>
      <div className="text-white text-sm">💧 Water: {water}</div>
      <div className="text-xs text-gray-500 mt-1">✨ Teleported directly from provider!</div>
    </div>
  );
};

const ChildWithContext = () => (
  <div className="bg-green-500/20 border border-green-500/50 rounded p-4 space-y-3">
    <div className="text-xs text-green-400 font-bold">👦 Child (chill, no props)</div>
    <div className="text-gray-400 text-xs">"Ahhh, I don't know anything about water. Living my best life!"</div>
    <GrandchildWithContext />
  </div>
);

const ParentWithContext = () => (
  <div className="bg-green-500/20 border border-green-500/50 rounded p-4 space-y-3">
    <div className="text-xs text-green-400 font-bold">👨 Parent (relaxed)</div>
    <div className="text-gray-400 text-xs">"No props to pass? No problem! Time to relax!"</div>
    <ChildWithContext />
  </div>
);

export default function Battle5() {
  const [waterAmount, setWaterAmount] = useState(100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-pink mb-4">
            BATTLE 5: useContext vs Prop Drilling
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passing a water bottle hand-to-hand through a stadium row vs a magical teleporting fountain.
          </p>
        </div>

        {/* Water Control */}
        <div className="flex justify-center mb-8">
          <div className="bg-dark-card rounded-xl p-4 border border-dark-border flex items-center gap-4">
            <span className="text-gray-400 text-sm">💧 Water Amount:</span>
            <input
              type="range"
              min="0"
              max="100"
              value={waterAmount}
              onChange={(e) => setWaterAmount(Number(e.target.value))}
              className="w-48 accent-neon-red"
            />
            <span className="text-neon-red font-mono w-12 text-center">{waterAmount}%</span>
          </div>
        </div>

        {/* Battle Arena */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Prop Drilling Side */}
          <BattleCard 
            title="😰 Prop Drilling (The Human Chain)" 
            color="from-red-500 to-pink-500"
            analogy="Like passing a water bottle through 10 rows at a concert. Everyone holds it, nobody drinks."
          >
            <div className="space-y-2">
              <div className="bg-dark-bg rounded-lg p-4 border border-dark-border space-y-3">
                <div className="bg-red-500/20 border border-red-500/50 rounded p-3">
                  <div className="text-xs text-red-400 font-bold">👴 Grandparent (source)</div>
                  <div className="text-gray-400 text-xs mt-1">
                    "Here's the water prop... I guess I have to pass it down?"
                  </div>
                  <div className="mt-2 text-xs bg-dark-bg rounded px-2 py-1 inline-block">
                    💧 water = {waterAmount}%
                  </div>
                </div>
                
                <ParentWithProps water={waterAmount} />
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                <div className="text-red-400 text-xs font-bold mb-1">⚠️ THE PAIN:</div>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Every intermediate component must accept & pass the prop</li>
                  <li>• Components become coupled to data they don't use</li>
                  <li>• Refactoring becomes a nightmare</li>
                  <li>• What if you need it 5 levels deeper? OOF.</li>
                </ul>
              </div>
            </div>
          </BattleCard>

          {/* Context Side */}
          <BattleCard 
            title="😎 useContext (The Water Fountain)" 
            color="from-cyan-500 to-blue-500"
            analogy="Like a magical fountain that teleports water to whoever's thirsty. No passing needed!"
          >
            <div className="space-y-2">
              <div className="bg-dark-bg rounded-lg p-4 border border-dark-border">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded p-3 mb-3">
                  <div className="text-xs text-neon-cyan font-bold">🌊 Context Provider (at top)</div>
                  <div className="text-gray-400 text-xs mt-1">
                    "I shall provide water to ALL who seek it!"
                  </div>
                  <div className="mt-2 text-xs bg-dark-bg rounded px-2 py-1 inline-block">
                    &lt;WaterContext.Provider value={'{'}{waterAmount}{'%'}&gt;
                  </div>
                </div>
                
                <WaterContext.Provider value={waterAmount}>
                  <ParentWithContext />
                </WaterContext.Provider>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded p-3">
                <div className="text-neon-cyan text-xs font-bold mb-1">✅ THE POWER:</div>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Skip all the middlemen - direct access!</li>
                  <li>• Intermediate components stay clean & reusable</li>
                  <li>• Add/remove consumers without touching parents</li>
                  <li>• Perfect for themes, auth, user settings, etc.</li>
                </ul>
              </div>
            </div>
          </BattleCard>
        </div>

        {/* Visual Comparison */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📊 THE VISUAL BREAKDOWN</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Prop Drilling Diagram */}
            <div>
              <h4 className="text-red-400 font-bold text-xs mb-3 text-center">Prop Drilling Flow 😰</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-red-500/20 border border-red-500/30 rounded p-2 text-center">
                  👴 Grandparent<br/>
                  <span className="text-red-400">receives & passes water prop</span>
                </div>
                <div className="text-red-400">↓ passes down</div>
                <div className="bg-red-500/20 border border-red-500/30 rounded p-2 text-center">
                  👨 Parent<br/>
                  <span className="text-red-400">receives & passes water prop</span>
                </div>
                <div className="text-red-400">↓ passes down</div>
                <div className="bg-red-500/20 border border-red-500/30 rounded p-2 text-center">
                  👦 Child<br/>
                  <span className="text-red-400">receives & passes water prop</span>
                </div>
                <div className="text-red-400">↓ passes down</div>
                <div className="bg-red-500/20 border border-red-500/30 rounded p-2 text-center">
                  👶 Grandchild<br/>
                  <span className="text-green-400">FINALLY USES IT!</span>
                </div>
              </div>
            </div>

            {/* Context Diagram */}
            <div>
              <h4 className="text-neon-cyan font-bold text-xs mb-3 text-center">Context Flow 😎</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded p-2 text-center">
                  🌊 Context Provider<br/>
                  <span className="text-neon-cyan">broadcasts water to ALL</span>
                </div>
                <div className="text-neon-cyan">↓ teleports ↓</div>
                <div className="bg-green-500/20 border border-green-500/30 rounded p-2 text-center">
                  👨 Parent<br/>
                  <span className="text-green-400">doesn't know, doesn't care</span>
                </div>
                <div className="text-gray-500">(no props!)</div>
                <div className="bg-green-500/20 border border-green-500/30 rounded p-2 text-center">
                  👦 Child<br/>
                  <span className="text-green-400">still clueless, living free</span>
                </div>
                <div className="text-gray-500">(no props!)</div>
                <div className="bg-green-500/20 border border-green-500/30 rounded p-2 text-center">
                  👶 Grandchild<br/>
                  <span className="text-neon-cyan">useContext() → INSTANT WATER!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📖 THE TEA ☕</h3>
          <div className="text-sm text-gray-400 leading-relaxed">
            <p className="mb-4">
              <strong className="text-red-400">Prop Drilling</strong> is fine for 1-2 levels. But when you're passing 
              data through 5+ components that don't need it, you're creating tight coupling and making your code 
              harder to maintain. It's like a human chain at a concert - inefficient and everyone's annoyed.
            </p>
            <p className="mb-4">
              <strong className="text-neon-cyan">useContext</strong> creates a "teleportation network" for your data. 
              Put a Provider at the top, and any component below can access the data directly using useContext(), 
              no matter how deep. The components in between? They stay blissfully unaware and completely reusable.
            </p>
            <div className="bg-dark-bg rounded p-3 mt-4">
              <code className="text-xs text-neon-cyan block mb-2">// Create context</code>
              <code className="text-xs text-purple-400 block mb-2">const ThemeContext = createContext();</code>
              <code className="text-xs text-neon-cyan block mb-2">// Provide at top</code>
              <code className="text-xs text-purple-400 block mb-2">&lt;ThemeContext.Provider value={theme}&gt;</code>
              <code className="text-xs text-neon-cyan block mb-2">// Consume anywhere below</code>
              <code className="text-xs text-purple-400 block">const theme = useContext(ThemeContext);</code>
            </div>
          </div>
        </div>

        {/* When to use */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
            <h4 className="text-red-400 font-bold text-xs mb-2">Props are fine for:</h4>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• 1-2 levels of nesting</li>
              <li>• Data that IS used by intermediates</li>
              <li>• Explicit data flow (easier to trace)</li>
            </ul>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded p-4">
            <h4 className="text-neon-cyan font-bold text-xs mb-2">Use Context for:</h4>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Global state (themes, auth, user)</li>
              <li>• Deep component trees</li>
              <li>• Values needed by many components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo, useCallback, memo } from 'react';
import BattleCard from '../components/BattleCard';

// Heavy calculation function - calculates prime numbers
const calculatePrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    num++;
  }
  return primes;
};

// Child component that receives a callback
const ChildComponent = memo(({ onClick, label }) => {
  console.log(`${label} rendered!`);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
    >
      {label}
    </button>
  );
});

export default function Battle2() {
  const [count, setCount] = useState(0);
  const [primeCount, setPrimeCount] = useState(1000);
  const [callbackClicks, setCallbackClicks] = useState(0);
  const [memoClicks, setMemoClicks] = useState(0);

  // WITHOUT useMemo - recalculates every render
  const primesWithoutMemo = calculatePrimes(primeCount);

  // WITH useMemo - only recalculates when primeCount changes
  const primesWithMemo = useMemo(() => {
    console.log('🎂 Calculating primes (useMemo version)...');
    return calculatePrimes(primeCount);
  }, [primeCount]);

  // WITHOUT useCallback - new function reference every render
  const handleClickNoCallback = () => {
    setCallbackClicks(prev => prev + 1);
  };

  // WITH useCallback - same function reference unless dependencies change
  const handleClickWithCallback = useCallback(() => {
    setCallbackClicks(prev => prev + 1);
  }, []);

  const handleIncrementCount = () => {
    setCount(prev => prev + 1);
  };

  const handleIncrementPrimes = () => {
    setPrimeCount(prev => prev + 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue mb-4">
            BATTLE 2: useMemo vs useCallback
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One remembers the cake. The other remembers the recipe. Both save you from doing unnecessary work.
          </p>
        </div>

        {/* Battle Arena */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* useMemo Side */}
          <BattleCard 
            title="🎂 useMemo (The Baked Cake)" 
            color="from-cyan-500 to-blue-500"
            analogy="Like remembering you already baked a cake instead of baking it again every time someone asks."
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Count (triggers re-render):</span>
                <span className="text-neon-cyan font-mono">{count}</span>
              </div>
              <button
                onClick={handleIncrementCount}
                className="w-full px-4 py-2 bg-dark-border rounded text-white text-sm hover:bg-dark-card transition-all"
              >
                + Increment Count (Re-render)
              </button>
              
              <div className="border-t border-dark-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Primes to calculate:</span>
                  <span className="text-neon-cyan font-mono">{primeCount}</span>
                </div>
                <button
                  onClick={handleIncrementPrimes}
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  + Add 100 More Primes
                </button>
              </div>

              <div className="bg-dark-bg rounded p-3 border border-dark-border">
                <div className="text-xs text-gray-500 mb-2">WITH useMemo:</div>
                <div className="text-green-400 text-xs font-mono truncate">
                  ✅ Cached! First 5: [{primesWithMemo.slice(0, 5).join(', ')}...]
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Clicks: <span className="text-neon-cyan">{memoClicks}</span>
                </div>
                <button
                  onClick={() => setMemoClicks(prev => prev + 1)}
                  className="mt-2 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs hover:bg-cyan-500/30 transition-all"
                >
                  Test Click (no recalc)
                </button>
              </div>
            </div>
          </BattleCard>

          {/* useCallback Side */}
          <BattleCard 
            title="📝 useCallback (The Recipe)" 
            color="from-purple-500 to-pink-500"
            analogy="Like remembering the recipe instead of writing it down fresh every single time."
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Count (triggers re-render):</span>
                <span className="text-neon-purple font-mono">{count}</span>
              </div>
              <button
                onClick={handleIncrementCount}
                className="w-full px-4 py-2 bg-dark-border rounded text-white text-sm hover:bg-dark-card transition-all"
              >
                + Increment Count (Re-render)
              </button>

              <div className="border-t border-dark-border pt-4">
                <div className="text-xs text-gray-500 mb-3">
                  Child components with React.memo:
                </div>
                
                <div className="space-y-3">
                  <div className="bg-dark-bg rounded p-3 border border-dark-border">
                    <div className="text-xs text-red-400 mb-2">❌ WITHOUT useCallback:</div>
                    <ChildComponent 
                      onClick={handleClickNoCallback} 
                      label="Clicks: No Callback"
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Re-renders parent = new function = child re-renders 😭
                    </div>
                  </div>

                  <div className="bg-dark-bg rounded p-3 border border-dark-border">
                    <div className="text-xs text-green-400 mb-2">✅ WITH useCallback:</div>
                    <ChildComponent 
                      onClick={handleClickWithCallback} 
                      label={`Clicks: ${callbackClicks}`}
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Same function reference = child stays cached 😎
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BattleCard>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📖 THE TEA ☕</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-neon-cyan font-bold mb-2">useMemo (Remember the Cake)</h4>
              <p className="text-gray-400 leading-relaxed">
                <strong>Caches the RESULT of a computation.</strong> Only recalculates when dependencies change. 
                Perfect for expensive calculations, filtering large arrays, or complex transformations. 
                Like baking a cake once and just serving slices instead of baking a new one every time.
              </p>
              <div className="block mt-2 bg-dark-bg p-2 rounded text-xs text-cyan-400 font-mono">
                const result = heavyCalc(); // memoized
              </div>
            </div>
            <div>
              <h4 className="text-neon-purple font-bold mb-2">useCallback (Remember the Recipe)</h4>
              <p className="text-gray-400 leading-relaxed">
                <strong>Caches the FUNCTION itself.</strong> Returns the same function reference between renders 
                unless dependencies change. Essential when passing callbacks to memoized children to prevent 
                unnecessary re-renders. Like keeping the recipe card instead of rewriting it each time.
              </p>
              <code className="block mt-2 bg-dark-bg p-2 rounded text-xs text-purple-400">
                const fn = useCallback(() => {...}, [deps]);
              </div>
            </div>
          </div>
        </div>

        {/* Console hint */}
        <div className="mt-4 text-center text-xs text-gray-500">
          💡 Open your browser console to see when calculations and re-renders happen!
        </div>
      </div>
    </div>
  );
}

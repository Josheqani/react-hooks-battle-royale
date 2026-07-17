import { useState, useReducer } from 'react';
import BattleCard from '../components/BattleCard';

// Reducer for the bank account
const bankReducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.amount };
    case 'WITHDRAW':
      if (action.amount > state.balance) return state;
      return { ...state, balance: state.balance - action.amount };
    case 'PAY_FEES':
      return { ...state, balance: state.balance - 50 };
    case 'APPLY_INTEREST':
      return { ...state, balance: Math.floor(state.balance * 1.05) };
    case 'RESET':
      return { balance: 1000, transactions: 0 };
    case 'LOG_TRANSACTION':
      return { ...state, transactions: state.transactions + 1 };
    default:
      return state;
  }
};

export default function Battle4() {
  // useState version - simple but gets messy with complex logic
  const [simpleBalance, setSimpleBalance] = useState(1000);
  const [simpleTransactions, setSimpleTransactions] = useState(0);

  // useReducer version - clean and organized
  const [bankState, dispatch] = useReducer(bankReducer, { balance: 1000, transactions: 0 });

  // useState handlers - notice how we have to manage multiple states
  const handleSimpleDeposit = () => {
    setSimpleBalance(prev => prev + 100);
    setSimpleTransactions(prev => prev + 1);
  };

  const handleSimpleWithdraw = () => {
    if (simpleBalance >= 50) {
      setSimpleBalance(prev => prev - 50);
      setSimpleTransactions(prev => prev + 1);
    }
  };

  const handleSimpleFees = () => {
    setSimpleBalance(prev => prev - 50);
    setSimpleTransactions(prev => prev + 1);
  };

  const handleSimpleReset = () => {
    setSimpleBalance(1000);
    setSimpleTransactions(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-arcade text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-orange mb-4">
            BATTLE 4: useReducer vs useState
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A light switch vs a DJ mixing board. Simple toggle or full control center?
          </p>
        </div>

        {/* Battle Arena */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* useState Side */}
          <BattleCard 
            title="🔦 useState (The Light Switch)" 
            color="from-yellow-500 to-orange-500"
            analogy="Great for simple on/off stuff. But try running a nightclub with just a light switch..."
          >
            <div className="space-y-4">
              <div className="bg-dark-bg rounded-lg p-6 border-2 border-neon-yellow flex flex-col items-center">
                <div className="text-gray-400 text-sm mb-2">Balance:</div>
                <div className="text-5xl font-mono text-neon-yellow">${simpleBalance}</div>
                <div className="text-xs text-gray-500 mt-2">Transactions: {simpleTransactions}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSimpleDeposit}
                  className="px-4 py-3 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30 transition-all border border-green-500/30"
                >
                  +$100 Deposit
                </button>
                <button
                  onClick={handleSimpleWithdraw}
                  className="px-4 py-3 bg-red-500/20 text-red-400 rounded text-sm hover:bg-red-500/30 transition-all border border-red-500/30"
                >
                  -$50 Withdraw
                </button>
                <button
                  onClick={handleSimpleFees}
                  className="px-4 py-3 bg-orange-500/20 text-orange-400 rounded text-sm hover:bg-orange-500/30 transition-all border border-orange-500/30"
                >
                  -$50 Fees
                </button>
                <button
                  onClick={handleSimpleReset}
                  className="px-4 py-3 bg-gray-500/20 text-gray-400 rounded text-sm hover:bg-gray-500/30 transition-all border border-gray-500/30"
                >
                  Reset
                </button>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3">
                <div className="text-yellow-400 text-xs font-bold mb-1">⚠️ THE STRUGGLE:</div>
                <p className="text-gray-400 text-xs">
                  Managing multiple related states means multiple setState calls. What if you need to validate? 
                  Or do multiple things at once? Code gets SPAGHETTI 🍝
                </p>
              </div>
            </div>
          </BattleCard>

          {/* useReducer Side */}
          <BattleCard 
            title="🎛️ useReducer (The DJ Board)" 
            color="from-purple-500 to-pink-500"
            analogy="A central mixing console. All actions go through one place. Clean, organized, professional."
          >
            <div className="space-y-4">
              <div className="bg-dark-bg rounded-lg p-6 border-2 border-neon-purple flex flex-col items-center">
                <div className="text-gray-400 text-sm mb-2">Balance:</div>
                <div className="text-5xl font-mono text-neon-purple">${bankState.balance}</div>
                <div className="text-xs text-gray-500 mt-2">Transactions: {bankState.transactions}</div>
              </div>

              {/* DJ Board Style Controls */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 border-2 border-purple-500/50">
                <div className="text-xs text-purple-400 font-bold mb-3 text-center">🎚️ ACTION PANEL</div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => dispatch({ type: 'DEPOSIT', amount: 100 })}
                    className="px-3 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded text-xs font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all active:scale-95"
                  >
                    ▶ DEPOSIT $100
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'WITHDRAW', amount: 50 })}
                    className="px-3 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded text-xs font-bold hover:shadow-lg hover:shadow-red-500/50 transition-all active:scale-95"
                  >
                    ◀ WITHDRAW $50
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'PAY_FEES' })}
                    className="px-3 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded text-xs font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all active:scale-95"
                  >
                    ⬇ PAY FEES
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'APPLY_INTEREST' })}
                    className="px-3 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded text-xs font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all active:scale-95"
                  >
                    ⬆ INTEREST +5%
                  </button>
                </div>

                <button
                  onClick={() => dispatch({ type: 'RESET' })}
                  className="w-full mt-2 px-3 py-2 bg-gray-700 text-gray-300 rounded text-xs font-bold hover:bg-gray-600 transition-all"
                >
                  ↻ RESET ACCOUNT
                </button>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                <div className="text-purple-400 text-xs font-bold mb-1">✅ THE POWER:</div>
                <p className="text-gray-400 text-xs">
                  One dispatch function. Centralized logic in reducer. Complex state transitions become 
                  predictable and testable. Perfect for forms, wizards, games, or anything with rules!
                </p>
              </div>
            </div>
          </BattleCard>
        </div>

        {/* Explanation */}
        <div className="mt-8 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">📖 THE TEA ☕</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-neon-yellow font-bold mb-2">useState (Keep It Simple)</h4>
              <p className="text-gray-400 leading-relaxed">
                Perfect for <strong>independent, simple values</strong>. A toggle, a counter, a form input. 
                When your state logic is straightforward and doesn't involve multiple related values affecting 
                each other, useState is your friend. Don't over-engineer a light switch!
              </p>
              <code className="block mt-2 bg-dark-bg p-2 rounded text-xs text-yellow-400">
                const [count, setCount] = useState(0);
              </code>
            </div>
            <div>
              <h4 className="text-neon-purple font-bold mb-2">useReducer (Go Pro)</h4>
              <p className="text-gray-400 leading-relaxed">
                When state logic gets <strong>complex</strong> - multiple values, validation, undo/redo, 
                or state that depends on previous state - useReducer shines. The reducer is a pure function 
                that takes current state + action, returns new state. Testable, predictable, organized.
              </p>
              <code className="block mt-2 bg-dark-bg p-2 rounded text-xs text-purple-400">
                const [state, dispatch] = useReducer(reducer, initialState);
              </code>
            </div>
          </div>
        </div>

        {/* When to use what */}
        <div className="mt-6 bg-dark-card rounded-xl p-6 border border-dark-border">
          <h3 className="font-arcade text-white text-sm mb-4 text-center">🎯 WHEN TO USE WHAT</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-4">
              <h4 className="text-neon-yellow font-bold mb-2">Choose useState when:</h4>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Single independent value</li>
                <li>• Simple toggles or counters</li>
                <li>• Form inputs</li>
                <li>• Loading states</li>
                <li>• Modal open/close</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4">
              <h4 className="text-neon-purple font-bold mb-2">Choose useReducer when:</h4>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Multiple related values</li>
                <li>• Complex state transitions</li>
                <li>• Undo/redo functionality</li>
                <li>• State machines / workflows</li>
                <li>• Shopping carts, forms with validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

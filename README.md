# ⚔️ React Hooks Battle Royale

An interactive playground that pits React hooks against each other in epic battles! Watch as `useEffect` and `useLayoutEffect` go head-to-head, and discover the real-world differences between React's most misunderstood hooks through live visual comparisons.

![React Version](https://img.shields.io/badge/React-19.2.7-61dafb?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.19-38bdf8?logo=tailwindcss&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🎯 What Is This?

Ever wondered what the actual difference is between `useEffect` and `useLayoutEffect`? Or struggled to understand when one hook fires versus another? **React Hooks Battle Royale** brings these concepts to life with side-by-side visual battles that make the abstract concrete.

Each "battle" is an interactive demonstration showing:
- **Visual timing differences** - See exactly when each hook executes
- **Flicker comparisons** - Watch how different hooks affect rendering
- **Real-time counters** - Track render cycles and execution order
- **Interactive controls** - Trigger re-renders and observe behavior

## 🥊 Battles Included

| Battle | Hook Matchup | What You'll Learn |
|--------|--------------|-------------------|
| **Battle 1** | `useEffect` vs `useLayoutEffect` | Timing differences in DOM updates |
| **Battle 2** | *(Coming soon)* | State management patterns |
| **Battle 3** | *(Coming soon)* | Memoization strategies |
| **Battle 4** | *(Coming soon)* | Effect cleanup & dependencies |
| **Battle 5** | *(Coming soon)* | Advanced hook compositions |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-hooks-battle-royale

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the dev server with hot reload
npm run dev
# or
bun run dev
```

Visit `http://localhost:5173` to start battling!

### Build for Production

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** - UI library with the latest features
- **[Vite](https://vitejs.dev/)** - Blazing fast build tool with HMR
- **[React Router v7](https://reactrouter.com/)** - Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations for battle effects
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Oxlint](https://oxc.rs/)** - Fast JavaScript/TypeScript linter

## 📁 Project Structure

```
react-hooks-battle-royale/
├── src/
│   ├── battles/          # Individual hook battle components
│   │   ├── Battle1.jsx   # useEffect vs useLayoutEffect
│   │   ├── Battle2.jsx   # (More battles coming)
│   │   └── ...
│   ├── components/       # Shared UI components
│   │   ├── Navigation.jsx
│   │   ├── LandingPage.jsx
│   │   └── BattleCard.jsx
│   ├── assets/           # Static assets
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public static files
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎮 How to Use

1. **Start the dev server** and navigate to the landing page
2. **Choose a battle** from the navigation menu
3. **Interact with the demo** - click buttons, toggle states, watch the magic happen
4. **Read the explanations** to understand what's happening under the hood
5. **Experiment!** Modify the code to see how changes affect behavior

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint for code quality checks |

## 🤝 Contributing

Want to add more battles or improve existing ones? Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-battle`)
3. Commit your changes (`git commit -m 'Add amazing battle'`)
4. Push to the branch (`git push origin feature/amazing-battle`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with the official [Vite React template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- Inspired by developers everywhere who've been confused by hook timing
- Powered by ☕ and React's excellent documentation

---

<div align="center">

**Ready to see hooks in action?** 

`npm run dev` and let the battles begin! ⚔️

</div>

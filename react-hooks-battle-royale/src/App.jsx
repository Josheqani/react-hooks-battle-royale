import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Battle1 from './battles/Battle1';
import Battle2 from './battles/Battle2';
import Battle3 from './battles/Battle3';
import Battle4 from './battles/Battle4';
import Battle5 from './battles/Battle5';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/battle/1" element={<Battle1 />} />
        <Route path="/battle/2" element={<Battle2 />} />
        <Route path="/battle/3" element={<Battle3 />} />
        <Route path="/battle/4" element={<Battle4 />} />
        <Route path="/battle/5" element={<Battle5 />} />
      </Routes>
    </Router>
  );
}

export default App;

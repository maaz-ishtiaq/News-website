import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Pagenews from './page/Pagenews';
import Next from './page/Next';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Pagenews />} />
      <Route path="/Next" element={<Next />} />
      
    </Routes>
  );
}

export default App;

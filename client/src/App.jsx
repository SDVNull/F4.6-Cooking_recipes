import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/category/:id" element={<Category />} />
      </Routes>
    </Router>
  );
}

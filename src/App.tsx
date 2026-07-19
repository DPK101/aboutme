import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import SketchesPage from './pages/SketchesPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/art" element={<SketchesPage />} />
        <Route path="/sketches" element={<Navigate to="/art" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
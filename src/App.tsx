import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { FaqsPage } from './pages/FaqsPage';
import { Home } from './pages/Home';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ScrollToTop } from './components/ScrollToTop';
import { CircleOfExcellencePage } from './pages/CircleOfExcellencePage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/circle-of-excellence" element={<CircleOfExcellencePage />} />
      </Routes>
    </BrowserRouter>
  );
}
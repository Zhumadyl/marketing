import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/ServicesPage/Services';
import CaseStudies from './pages/CaseStudies-ListPage/CaseStudies';
import CaseStudiesDetail from './pages/CaseStudies-DetailPage/CaseStudiesDetail';
import Blog from './pages/BlogPage/Blog';
import BlogDetail from './pages/Blog-DetailPage/BlogDetail';
import Contact from './pages/ContactsPage/Contact';
import About from './pages/AboutPage/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <HomePage/>
        } />
        <Route path="/services" element={
          <Services/>
        }/>
        <Route path="/casestudies" element={
          <CaseStudies/>
        }/>
        <Route path="/casestudiesDetail" element={
          <CaseStudiesDetail/>
        }/>
        <Route path="/blog" element={
          <Blog/>
        }/>
        <Route path="/blogDetail" element={
          <BlogDetail/>
        }/>
        <Route path="/contact" element={
          <Contact/>
        }/>
        <Route path="/about" element={
          <About/>
        }/>
      </Routes>
    </div>
  );
}

export default App;

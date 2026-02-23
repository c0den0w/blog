import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./NavBar.jsx";
import About from './About.jsx';
import Hero from "./Hero.jsx";
import Blogs from './Blogs.jsx';
import MyWork from './MyWork.jsx';
import './App.css'


function App() {
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const myWorkRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Reusable scroll handler to eliminate code duplication
  const createScrollHandler = (ref) => () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollHandlers = {
    about: createScrollHandler(aboutRef),
    blogs: createScrollHandler(blogsRef),
    work: createScrollHandler(myWorkRef),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar {...scrollHandlers} />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={blogsRef}>
        <Blogs />
      </div>
      <div ref={myWorkRef}>
        <MyWork />
      </div>

      {/* Scroll Guide Ruler */}
      <div className="scroll-guide-container">
        <div className="scroll-guide-track">
          <div
            className="scroll-guide-indicator"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="scroll-progress-text">{(scrollProgress).toFixed(2)}</div>
      </div>
    </>
  );
}

export default App

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalyst from './components/Catalyst';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Banner from './components/Banner';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const sidebarFunction = () => setSidebar(!sidebar);

  const navbarActive = () => {
    if(window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", navbarActive);

  return (
    <div className="App">
      <Navbar click={sidebarFunction} navbar={navbar} />
      <Sidebar effect={sidebar} click={sidebarFunction} />
      <Hero />
      <Catalyst />
      <Services />
      <Testimonials />
      <Banner />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/header/NavBar';
import { Banner } from './components/header/Banner';
import { About } from './components/about/About';
import { Skills } from './components/skills/MySkills';
import { Projects } from './components/projects/MyProjects';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

// rfc
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

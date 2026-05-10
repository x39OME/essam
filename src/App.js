import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar }     from './components/header/NavBar';
import { Banner }     from './components/header/Banner';
import { About }      from './components/about/About';
import { Stats }      from './components/stats/Stats';
import { Skills }     from './components/skills/MySkills';
import { Services }   from './components/services/Services';
import { Projects }   from './components/projects/MyProjects';
import { ContactMe }  from './components/contact/ContactMe';
import { Footer }     from './components/footer/Footer';
import { Preloader }  from './components/ui/Preloader';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <div className={`App${loading ? ' app--loading' : ''}`}>
        <NavBar />
        <Banner />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <ContactMe />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;

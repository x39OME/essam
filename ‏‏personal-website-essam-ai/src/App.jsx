import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
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
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const PRELOAD_KEY = 'preloaded';

const shouldShowPreloader = () => {
  try { return !sessionStorage.getItem(PRELOAD_KEY); } catch (e) { return true; }
};

const markPreloaded = () => {
  try { sessionStorage.setItem(PRELOAD_KEY, '1'); } catch (e) { /* ignore */ }
};

function App() {
  const [loading, setLoading] = useState(shouldShowPreloader);

  return (
    <ErrorBoundary>
      {loading && <Preloader onFinish={() => { markPreloaded(); setLoading(false); }} />}
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
    </ErrorBoundary>
  );
}

export default App;

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

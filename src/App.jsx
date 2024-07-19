
import styles from './App.module.css'; // Ensure you have the styles file
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import Footer from './components/Footer/Footer'; // Correct import

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

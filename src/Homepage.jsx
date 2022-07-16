import Hero from './Components/hero';
import AboutMe from './Components/aboutme';
import Skills from './Components/skills';
import Navbar from "./Components/navbar";

const App = () => { 
  return (
    <div className="w-screen h-full bg-slate-600 text-white relative">
      <Hero />
      <div className="sticky top-0 left-0 right-0 -mt-20">
        <Navbar />
      </div>
      <AboutMe />
      <Skills />
    </div>
  );
}
export default App;
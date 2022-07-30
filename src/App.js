import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import Profile from "./PortfolioContainer/Home/Profile";
import NavBar from "./PortfolioContainer/NavBar/NavBar";
import Projects from "./PortfolioContainer/Projects/Projects";
import Skills from "./PortfolioContainer/Skills/Skills";
import Timeline from "./PortfolioContainer/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <Contact/>
     
    </div>
  );
}

export default App;

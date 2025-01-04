import "./App.css";
import Cover from "./components/Cover";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Skills />
      <Projects />
      <GetInTouch />
    </>
  );
}

export default App;

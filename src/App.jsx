// import Chatbot from "react-chatbot-kit";
import "./App.css";
import Cover from "./components/Cover";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ResumeOverview from "./components/ResumeOverview";
import Skills from "./components/Skills";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Chatbot />
      <Cover />
      <section id="skills">
        <Skills />
      </section>
      <section id="ResumeOverview">
        <ResumeOverview />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </>
  );
}

export default App;

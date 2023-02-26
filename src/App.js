// Components
// import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen sm:py-20">
      <div className="container mx-auto bg-neutral-50 rounded-xl shadow-xl py-12">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;

// Components
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen mx-auto bg-neutral-100 p-6 md:px-32 md:py-16">
      <NavBar />
      <About />
      <Projects />
    </div>
  );
}

export default App;

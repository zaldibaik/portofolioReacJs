import Header from "./components/Header";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <main>
        <div data-aos="flip-up">
          <About />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

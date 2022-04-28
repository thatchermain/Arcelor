import "./styles/global.scss";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
      <About />
      <main>
        <MainContent />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

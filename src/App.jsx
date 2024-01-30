import Signup from "./components/Signup";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="home-container">
        <div className="vertical-strip" />
        <Nav />
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;

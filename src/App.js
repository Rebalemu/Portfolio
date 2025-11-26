import "./style.css";
import Header from "./component/header";
import Hero from "./component/hero";
import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Service from "./component/service";
import Portfolio from "./component/portfolio";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
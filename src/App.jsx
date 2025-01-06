import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Galleri from "./pages/Galleri";
import HomePage from "./pages/HomePage";
//import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";
import Navbarr from "./components/Navbarr";

function App() {
  return (
    <div className="w-full overflow-hidden">
     {/* <Navbar />*/}
      
      {/* <Header /> */}
      {/* <About />*/}
      {/* <Projects />*/}
      {/* <Galeri />*/}
      {/*<Gallery/> */}
      {/*<Cards />*/}
      <Navbarr/>
      <Router basename="/">
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/galery" element={<Galleri />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;

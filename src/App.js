import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Resources from "./components/Resources";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <ContactUs />
      <Resources />
    </>
  );
}

export default App;

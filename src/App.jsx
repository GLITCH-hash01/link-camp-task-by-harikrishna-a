
import Home from "./Pages/Homes"
import Events from "./Pages/Events"
import About from "./Pages/About"
import Footer from "./Pages/Footer"
import PoweredBy from "./Pages/PoweredBy"
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init({
  duration: 1500,
});


function App() {

  return (
    <>
      <Home />
      <About/>
      <Events/>
      <PoweredBy/>
      <Footer/>
    </>
  )
}

export default App

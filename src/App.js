
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Platforms from './components/Platforms'
import Projects from './components/Projects'
import Calculation from './components/Calculation'
import Pricing from './components/Pricing'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Platforms />
      <Projects />
      <Calculation />
      <Pricing />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;


import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Footer from '../Components/Footer';


const LandingPage = () => {
  return (
    <div className="bg-[#BE3144] min-h-screen text-white flex flex-col items-center">
      <Navbar/>
      <div className="w-full max-w-3xl p-6">
        <Home />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;


import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Download_Photo from '../Components/Download_Photo';
import Footer from '../Components/Footer';

const ImageDownload = () => {
  const location = useLocation();
  const capturedImages = location.state?.capturedImages || [];

  return (
    <div className="bg-[#BE3144] min-h-screen text-white flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-3xl p-6">
        <Download_Photo capturedImages={capturedImages} />
      </div>
      <Footer />
    </div> 
  );
};

export default ImageDownload;

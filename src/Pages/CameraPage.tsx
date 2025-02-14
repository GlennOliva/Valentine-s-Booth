import React from 'react';
import Navbar from '../Components/Navbar';
import CameraBooth from '../Components/Camera';
import Footer from '../Components/Footer';

const CameraPage: React.FC = () => {
  return (
    <div className="bg-[#BE3144] min-h-screen text-white flex flex-col items-center">
      <Navbar />
      <CameraBooth />
      <Footer />
    </div>  
  );
};

export default CameraPage;  // ✅ Ensuring this is properly exported

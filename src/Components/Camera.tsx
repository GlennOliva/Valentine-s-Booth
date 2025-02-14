import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router";

const CameraBooth: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const navigate = useNavigate();
  const handleSavePhoto = () => {
    if (capturedImages.length > 0) {
      navigate('/download', { state: { capturedImages } });

    } else {
      alert("No images captured! Please capture an image first.");
    }
  };
  
      
  const startCountdown = () => {
    setIsCapturing(true);
    let count = 3;
    setCountdown(count);

    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        captureImage();
        setCountdown(null);
        setIsCapturing(false);
      }
    }, 1000);
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc && capturedImages.length < 4) {
        setCapturedImages([...capturedImages, imageSrc]);
      }
    }
  };

  return (
   
    <div className="flex flex-col items-center  min-h-screen p-20 text-white">
  
      <h1 className="text-xl font-bold">VALENTINE'S BOOTH</h1>
      <div className="mt-4 border-2 border-white p-4 text-center relative">
        {countdown !== null && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
            {countdown}
          </div>
        )}
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/png"
          className="w-80 h-60"
        />
      </div>
      <div className="mt-4 flex space-x-4">
        {capturedImages.length < 4 && (
          <button
             className="border-2 border-white text-white px-6 py-3  font-semibold text-lg hover:bg-white rounded-full hover:text-[#BE3144] transition"
            onClick={startCountdown}
            disabled={isCapturing}
          >
            Take a Picture
          </button>
        )}
        {capturedImages.length === 4 && (
          <button  className="border-1 border-white text-white px-6 py-3 rounded-full  font-semibold text-lg hover:bg-white hover:text-[#BE3144] transition"
          onClick={handleSavePhoto} >
            Save Photo
          </button>
        )}
      </div>
      <div className="mt-4 flex">
        <div className="w-2/3 p-2 border-2 border-white ">
          {capturedImages.length > 0 && (
            <img src={capturedImages[0]} alt="Captured" className="w-full h-90 object-cover " />
          )}
        </div>
        <div className="w-1/3 flex flex-col space-y-2 p-2">
          {capturedImages.slice(1).map((img, index) => (
            <img key={index} src={img} alt="Captured" className="w-40 h-24 object-cover border-2 border-white " />
          ))}
        </div>
      </div>

    </div>
  );
};

export default CameraBooth;

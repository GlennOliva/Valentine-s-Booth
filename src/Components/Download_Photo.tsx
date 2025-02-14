import React, { useRef } from "react";
import html2canvas from "html2canvas";
import home_image2 from "../assets/images/valentines_2-removebg-preview.png";
interface DownloadPhotoProps {
  capturedImages: string[];
}

const Download_Photo: React.FC<DownloadPhotoProps> = ({ capturedImages = [] }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;
  
    html2canvas(canvasRef.current, { useCORS: true, scale: 2 })
      .then((canvas) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            alert("Failed to generate the image. Please try again.");
            return;
          }
  
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "valentines_booth_image.png");
  
          // Check if the device is mobile
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
          if (isMobile) {
            // Special workaround for mobile devices
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            // Normal download for desktop
            link.click();
          }
  
          // Cleanup URL after a short delay
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        }, "image/png");
      })
      .catch((err) => console.error("html2canvas error:", err));
  };
  
  
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#BE3144] p-5 border-2 rounded-2xl pb-2.5">
      {/* Prevent rendering if images are missing */}
      {capturedImages.length > 0 ? (
        <div
          ref={canvasRef}
          className="relative bg-[#BE3144] p-4 w-full max-w-[680px] h-auto sm:h-[500px] flex flex-col sm:block"
        >
          {/* Large Main Image */}
          <div className="w-full sm:w-[500px] h-[250px] sm:h-[420px] border-2 border-white mx-auto sm:absolute sm:top-6 sm:left-6">
            <img src={capturedImages[0]} className="w-full h-full object-cover" alt="Captured 1" />
          </div>

          {/* Small Side Images - Stack for mobile, side for desktop */}
          <div className="flex sm:flex-col sm:absolute sm:top-6 sm:right-6 mt-4 sm:mt-0 space-x-2 sm:space-x-0 sm:space-y-2">
            {capturedImages[1] && (
              <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] border-2 border-white">
                <img src={capturedImages[1]} className="w-full h-full object-cover" alt="Captured 2" />
              </div>
            )}
            {capturedImages[2] && (
              <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] border-2 border-white">
                <img src={capturedImages[2]} className="w-full h-full object-cover" alt="Captured 3" />
              </div>
            )}
            {capturedImages[3] && (
              <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] border-2 border-white">
                <img src={capturedImages[3]} className="w-full h-full object-cover" alt="Captured 4" />
              </div>
            )}
          </div>

      {/* Text & Decoration */}
<div className="text-center text-white font-bold mt-4 sm:absolute sm:bottom-0.5 sm:left-0 sm:right-0 flex items-center justify-center space-x-4">
  {/* Left Heart Image */}


  {/* Valentine's Message */}
  <p className="text-lg sm:text-xl">HAPPY VALENTINE'S DAY</p>

  {/* Right Heart Image */}
  <img 
    src={home_image2}  
    alt="Right Heart" 
    className="w-8 h-8 sm:w-12 sm:h-12 object-contain" 
  />
</div>


        </div>
      ) : (
        <p className="text-white text-lg">No images available</p>
      )}

      {/* Download Button - Always visible */}
      <button
        className="mt-6 border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#BE3144] transition"
        onClick={handleDownload}
        disabled={capturedImages.length === 0} // Disable if no images
      >
        Download Image
      </button>
    </div>
  );
};

export default Download_Photo;

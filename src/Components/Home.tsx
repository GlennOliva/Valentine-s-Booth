import home_image from "../assets/images/valentines_1-removebg-preview.png";
import home_image2 from "../assets/images/valentines_2-removebg-preview.png";
import { useNavigate } from "react-router";


const Home = () => {
  const navigate = useNavigate();
const handleCamera= () => {
      navigate('/camera');  // ✅ Redirects to the ImageDownload (Download_Photo) page
    };
  return (
    <div className="bg-[#BE3144] text-white px-1 py-2 flex flex-col md:flex-row items-center justify-center md:space-x-8">
      {/* Left Section: Image */}
      <div className="flex justify-center md:w-2/5">
        <div className="border border-white p-4">
          <img src={home_image} alt="Valentine Booth" className="max-w-full h-auto" />
          <img src={home_image2} alt="Valentine Booth" className="max-w-full h-auto mt-4" />
        </div>
      </div>

     {/* Right Section: Content */}
<div className="md:w-3/4  text-left md:text-justify space-y-4 mx-auto my-10 ">
  <h2 className="text-xl font-bold text-center md:text-justify w-l">
    ❤️ CELEBRATE LOVE AT OUR VALENTINE’S BOOTH ❤️
  </h2>
  <p className="text-lg leading-relaxed">
    Step into a world of romance and sweet surprises! Our Valentine’s Booth is the perfect place to create unforgettable memories with your loved ones. Whether you're looking for the perfect gift, capturing special moments, or enjoying delightful treats, we’ve got something special for everyone.
  </p>

  {/* Features */}
  <ul className="text-lg space-y-2">
    <li>✨ <b>What’s in This app?</b></li>
    <li>📸 FREE Digital Photobooth App – Capture love-filled moments instantly!</li>
    <li>📥 Free Download of the image.</li>
  </ul>

  {/* Description */}
  <p className="text-lg leading-relaxed">
    💖 <b>Introducing Our Free Valentine’s Photobooth Web App!</b>  
    Make your Valentine’s Day even more special with our exclusive digital photobooth app! Couples can take unlimited romantic snapshots, add cute Valentine’s filters, and download their photos instantly—completely free of charge!
  </p>

  <p className="text-lg">
    Come and experience love in full bloom! Visit us and make this Valentine’s Day extra special. 💞
  </p>

  {/* CTA Button */}
  <div className="mt-6 flex justify-center md:justify-start">
    <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#BE3144] transition"
    onClick={handleCamera}>
      USE THIS APP
    </button>
  </div>
</div>

    </div>
  );
};

export default Home;

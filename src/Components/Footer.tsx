

const Footer = () => {
  return (
    <footer className="bg-[#BE3144] text-white text-center py-4 mt-6">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} Developed by Glenn. All rights reserved.
        </p>
        
        {/* Optional: Social Media Icons */}
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="bx bxl-facebook text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="bx bxl-twitter text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="bx bxl-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

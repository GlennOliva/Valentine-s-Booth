

const About = () => {
  return (
    <div className="w-full max-w-3xl bg-white text-[#BE3144] p-8 rounded-lg shadow-lg mt-8">
      {/* About Section */}
      <h2 className="text-xl font-bold text-center">💖 ABOUT OUR VALENTINE'S BOOTH 💖</h2>
      <p className="mt-3 text-center">
        We believe that love should be celebrated in the most magical way! Our Valentine’s Booth is designed to bring couples, friends, and families together to share heartfelt moments.
      </p>
      <ul className="mt-4 text-sm">
        <li>✨ Capture fun, romantic moments</li>
        <li>📸 Add adorable effects</li>
        <li>📥 Download pictures instantly for FREE</li>
      </ul>

      <h3 className="mt-4 font-semibold text-center">💡 How It Works:</h3>
      <ol className="list-decimal list-inside text-sm mt-2">
        <li>Open the Valentine’s Photobooth App</li>
        <li>Snap a cute picture with your partner</li>
        <li>Download & share your love-filled memories</li>
      </ol>
    </div>
  );
};

export default About;

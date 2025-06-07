import { useEffect, useState } from 'react';

const PopupAd = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeAd = () => setShowAd(false);

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-[90%] sm:max-w-sm text-center shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={closeAd}
          aria-label="Close advertisement"
        >
          ×
        </button>

        {/* JobPort Video Ad */}
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // replace with your actual JobPort video URL
          controls
          autoPlay
          muted
          className="w-full rounded mb-4"
        />

        <h2 className="text-base sm:text-lg font-bold mb-2">Explore Jobs on JobPort!</h2>
        <p className="text-sm sm:text-base mb-4">Watch and get started with top companies hiring now.</p>
        <button
          onClick={() => {
            window.open("https://example-jobport.com", "_blank");
            closeAd();
          }}
          className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default PopupAd;

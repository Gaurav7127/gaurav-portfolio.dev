import React, { useState } from 'react';
import { FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const IDCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      {/* Show on desktop only */}
      <div className="hidden md:block">
        <div
          className="perspective w-72 h-96 cursor-pointer mx-auto"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-slate-900 to-gray-800 rounded-xl shadow-2xl text-white flex flex-col items-center justify-center backface-hidden">
              <img
                className="w-32 h-32 rounded-full border-4 border-cyan-400 mb-4"
                src="profilephoto.jpg"
                alt="Profile"
              />
              <h2 className="text-xl font-bold">Gaurav Singh</h2>
              <p className="text-sm text-gray-400">B.Sc. Artificial Intelligence</p>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-cyan-700 to-indigo-800 text-white rounded-xl shadow-2xl p-5 rotate-y-180 backface-hidden flex flex-col justify-center space-y-2">
              <p><FaEnvelope className="inline mr-2" /> gauravsingh1752005@gmail.com</p>
              <p><FaPhoneAlt className="inline mr-2" /> +91-8530042162</p>
              <p><FaGithub className="inline mr-2" /> github.com/Gaurav7127</p>
              <p><FaMapMarkerAlt className="inline mr-2" /> Satara, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Show on mobile only */}
      <div className="block md:hidden text-white text-center mt-10">
        <h1 className="text-2xl font-bold">Gaurav Singh</h1>
        <p className="text-gray-400 mt-2">Welcome to my terminal portfolio.</p>
        {/* Optional: insert your terminal component here */}
      </div>
    </div>
  );
};

export default IDCard;

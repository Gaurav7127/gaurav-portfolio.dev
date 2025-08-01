import React from 'react';
import Terminal from './components/Terminal';
import IDCard from './components/IDCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header with name and title */}
      <div className="p-4 md:p-6 border-b border-gray-800">
        <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Gaurav Singh </h1>
        <p className="text-gray-400 text-base md:text-lg">Artificial Intelligence Student </p>
      </div>
      
      {/* Command bar */}
      <div className="px-4 md:px-6 py-3 border-b border-gray-800 bg-gray-900/30 overflow-x-auto">
        <div className="flex gap-2 md:gap-4 text-green-400 text-xs md:text-sm whitespace-nowrap min-w-max">
          <span className="hover:text-green-300 cursor-pointer transition-colors">help</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">about</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">projects</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">skills</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">experience</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">contact</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">education</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">certifications</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">sudo</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-green-300 cursor-pointer transition-colors">clear</span>
        </div>
      </div>
      
      <div className="flex h-[calc(100vh-140px)] md:h-[calc(100vh-140px)]">
        {/* Left section - ID Card */}
        <div className="hidden md:flex md:w-[35%] p-6 border-r border-gray-800 flex-col justify-center">
          <IDCard />
          <div className="mt-6 text-center">
            <div className="text-green-400 text-sm border border-green-400 rounded px-3 py-1 inline-block">
              [Interactive 3D Card]
            </div>
          </div>
        </div>
        
        {/* Right section - Terminal */}
        <div className="w-full md:w-[65%] flex">
          <Terminal />
        </div>
      </div>
      
      {/* Footer with timestamp */}
      <div className="px-4 md:px-6 py-2 border-t border-gray-800 bg-gray-900/30">
        <div className="flex justify-between items-center text-green-400 text-xs">
          <span>gaurav@portfolio:~$</span>
          <span className="hidden sm:inline">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
          <span className="sm:hidden">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}


export default App;
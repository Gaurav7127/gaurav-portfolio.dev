import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
export default function Appp() {
  return (
    <div className="h-screen flex flex-col bg-black text-white font-mono">
      {/* ID Card section - stays at the top */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-md p-4 w-fit">
          <img src="/your-photo.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-2" />
          <h2 className="text-center text-xl font-bold">Gaurav Singh</h2>
        </div>
      </div>

      {/* Terminal section - takes up the remaining height and scrolls inside */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto px-6 py-4" id="terminal-container">
          {/* Your Terminal component goes here */}
          <Terminal />
        </div>
      </div>
    </div>
  );
}

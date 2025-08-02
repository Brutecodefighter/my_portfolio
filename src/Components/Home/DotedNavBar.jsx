// DotNavbar.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_DOTS = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

export default function DotNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[100] flex items-center space-x-4 px-3 py-2 bg-transparent">
      {NAV_DOTS.map(dot => {
        const isActive = location.pathname === dot.path;
        return (
          <button
            key={dot.path}
            onClick={() => (location.pathname !== dot.path ? navigate(dot.path) : null)}
            aria-label={dot.label}
            className={`
              w-3.5 h-3.5 rounded-full border-2
              flex items-center justify-center transition-all duration-300 outline-none
              ${isActive 
                ? "bg-cyan-400 border-cyan-400 shadow-[0_0_10px_2px_#22d3ee80] animate-pulse"
                : "bg-transparent border-cyan-400 hover:bg-cyan-200/20"
              }
              focus:ring-2 focus:ring-cyan-300
            `}
            style={{
              boxShadow: isActive 
                ? "0 0 8px 2px #22d3ee80,0 0 0 0 #fff0" 
                : "0 0 0 0 #fff0"
            }}
          >
            {isActive && (
              <span className="sr-only">{dot.label} (current page)</span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

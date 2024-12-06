import React from 'react';

export default function Logo() {
  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <img 
        src="/assets/logo.png"
        alt="PPG Ile-de-France - Peintures de Paris - Seigneurie"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
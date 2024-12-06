import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 border-b">
      <div className="max-w-7xl mx-auto">
        <Logo />
      </div>
    </header>
  );
}
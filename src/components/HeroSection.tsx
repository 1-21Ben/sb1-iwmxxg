import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#0074A9] py-12 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Site d'assistance PPG IDF
        </h1>
        <p className="mt-6 text-xl text-gray-200">
          A partir de janvier 2025 les magasins Peintures de Paris ainsi que les magasins Seigneurie situés en Ile-de-France et dans l'Oise, seront rattachés à l'entité PPG Ile-De-France (PPG IDF), nouvelle dénomination de Peintures de Paris.
        </p>
      </div>
    </div>
  );
}
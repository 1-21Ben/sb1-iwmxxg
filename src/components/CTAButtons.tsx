import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CTAButton {
  text: string;
  url: string;
  color: string;
  external: boolean;
}

export default function CTAButtons() {
  const buttons: CTAButton[] = [
    {
      text: 'peinturesdeparis.com',
      url: 'https://www.peinturesdeparis.com/',
      color: 'bg-[#9D2C85] hover:bg-[#8D2575]',
      external: true,
    },
    {
      text: 'Nos points de ventes',
      url: '/assets/carte_magasin_paysage.pdf',
      color: 'bg-gray-400 hover:bg-gray-500',
      external: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button.color} text-white rounded-lg px-6 py-4 text-center font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2`}
          >
            {button.text}
            <ExternalLink size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
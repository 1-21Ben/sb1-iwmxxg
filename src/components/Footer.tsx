import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link 
            to="/mentionslégales" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
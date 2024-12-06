import React from 'react';
import Header from '../components/Header';

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Informations légales</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-6">MENTIONS LEGALES – CGU – POLITIQUE DE CONFIDENTIALITE</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-4">1. MENTIONS LEGALES</h3>
          <p>Le site internet Le site internet www.ppgidf.com (le Site) est édité par la société PPG Ile de France, SASU au capital de 822 552,00 €, dont le siège social est situé 41 B RUE DU CHATEAU 92500 RUEIL-MALMAISON, dont le numéro individuel d'identification TVA est FR81602058653 (le Vendeur).</p>
          
          {/* Rest of the legal content */}
          <p className="text-sm text-gray-600 mt-12">Dernière mise à jour : Décembre 2024</p>
          <p className="text-sm text-gray-600">©2024. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}
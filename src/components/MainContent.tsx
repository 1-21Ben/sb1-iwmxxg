import React from 'react';
import ContactForm from './ContactForm';

export default function MainContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Points à vérifier Section */}
        <div id="checklist" className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Point à vérifier
          </h2>
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              Adresser à partir de janvier vos règlements à l'IBAN de PPG IDF.​
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              N'hésitez pas à nous contacter si besoin via le formulaire de contact.​
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Nous contacter
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
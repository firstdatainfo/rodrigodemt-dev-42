import React from 'react';
import { Mail, Globe, Phone, Instagram } from 'lucide-react';

const EventosContact = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Contato e Redes Sociais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <a 
          href="https://instagram.com/first_developer_mt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <Instagram className="w-5 h-5" />
          first_developer_mt
        </a>
        <a 
          href="https://firstsistemas.acess.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <Globe className="w-5 h-5" />
          firstsistemas.acess.app
        </a>
        <a 
          href="tel:+5566992480993"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
          (66) 99248-0993 / 99225-8469
        </a>
        <a 
          href="mailto:developer@rodrigodevmt.com.br"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
          developer@rodrigodevmt.com.br
        </a>
        <a 
          href="mailto:developer@rodrigodevmt.com.br"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors md:col-span-2"
        >
          <Mail className="w-5 h-5" />
          developer@rodrigodevmt.com.br
        </a>
      </div>
    </div>
  );
};

export default EventosContact;
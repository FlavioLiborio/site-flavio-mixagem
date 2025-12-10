import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { Icon } from './Icons';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className={`rounded-xl overflow-hidden border transition-all duration-300 ${
            openIndex === index 
              ? 'bg-brand-card border-brand-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
              : 'bg-brand-card/50 border-white/10 hover:border-white/20'
          }`}
        >
          <button
            className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
            onClick={() => toggle(index)}
          >
            <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
              {item.question}
            </span>
            <div className={`transform transition-transform duration-300 text-brand-500 ${openIndex === index ? 'rotate-180' : ''}`}>
              <Icon name="ChevronDown" />
            </div>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
import React from 'react';
import type { Feature } from '../types';
import { Icon } from './Icons';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group relative p-8 rounded-xl bg-brand-card border border-white/5 hover:border-brand-gold/40 transition-all duration-500 overflow-hidden">
      {/* Subtle Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-lg bg-brand-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-gold/50">
          <Icon name={feature.iconName} size={28} className="text-gray-400 group-hover:text-brand-gold transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
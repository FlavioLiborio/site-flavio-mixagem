import React from 'react';
import { 
  Play, 
  CheckCircle, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  Mic2,
  Sliders,
  Headphones, 
  Music, 
  Activity,
  Disc,
  Zap
} from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  Play, CheckCircle, ShieldCheck, ChevronDown, Menu, X, 
  Mic2, Sliders, Headphones, Music, Activity, Disc, Zap
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
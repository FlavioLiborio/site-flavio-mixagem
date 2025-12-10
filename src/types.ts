export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}
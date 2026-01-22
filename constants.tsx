
import React from 'react';
import { 
  DollarSign, 
  ShieldCheck, 
  Search, 
  TrendingUp, 
  Lock, 
  Headphones 
} from 'lucide-react';
import { JobListing, Article, Feature } from './types';

export const COLORS = {
  primary: '#2563eb',
  heroBg: '#dce4ec',
  darkBtn: '#1e293b',
  textGray: '#4b5563'
};

export const JOB_LISTINGS: JobListing[] = [
  {
    id: '1',
    title: 'HR Specialist',
    description: 'Join us as our HR Specialist! You\'ll be the go-to for all things people and culture...',
    location: 'Noida, Uttar Pradesh',
    type: 'Full Time',
    department: 'Human Resources'
  },
  {
    id: '2',
    title: 'Sales Development Representative (SDR), India Operations',
    description: 'Kickstart the sales process by identifying and qualifying high-potential leads...',
    location: 'Noida, Uttar Pradesh',
    type: 'Full Time',
    department: 'Sales'
  },
  {
    id: '3',
    title: 'Sales Development Representative (SDR), Global',
    description: 'Fuel our global sales efforts by generating qualified leads from across the world...',
    location: 'Noida, Uttar Pradesh',
    type: 'Full Time',
    department: 'Sales'
  },
  {
    id: '4',
    title: 'Frontend Developer (SDE II)',
    description: 'Create intuitive, user-friendly interfaces that bring our platform to life...',
    location: 'Noida, Uttar Pradesh',
    type: 'Full Time',
    department: 'Product & Tech'
  },
  {
    id: '5',
    title: 'AI Engineer',
    description: 'Design and implement AI models that enhance our platform\'s capabilities...',
    location: 'Noida, Uttar Pradesh',
    type: 'Full Time',
    department: 'Product & Tech'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Arbitration Award Must Be Served to Party and Not Agent or Advocate',
    excerpt: 'Recently, the Delhi High Court has held that for a valid delivery of an Arbitral Award...',
    image: 'https://picsum.photos/seed/legal1/600/400',
    tags: ['Latest', 'Alternate Dispute Resolution'],
    category: 'Legal'
  },
  {
    id: '2',
    title: 'Bombay High Court Declines to Vacate Ex Parte Injunction against...',
    excerpt: 'The Bombay High Court recently declined to revoke its ex-parte ruling that prevented...',
    image: 'https://picsum.photos/seed/legal2/600/400',
    tags: ['Latest', 'IPR Management'],
    category: 'IPR'
  },
  {
    id: '3',
    title: 'One Partner of the Firm Cannot Refer Dispute to Arbitration in Absence of...',
    excerpt: 'The Supreme Court of India has ruled that a partner cannot refer a dispute relating to...',
    image: 'https://picsum.photos/seed/legal3/600/400',
    tags: ['Latest', 'Alternate Dispute Resolution'],
    category: 'Legal'
  }
];

export const MAIN_FEATURES: Feature[] = [
  {
    title: 'Revenue Preservation',
    description: 'Comprehensive contract lifecycle—from auto-generation to execution, collaboration, and obligation tracking.',
    icon: <DollarSign className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Risk Mitigation',
    description: 'Monitor legal matters and streamline stakeholder interactions with automation. Minimize risks.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Brand Protection',
    description: 'Safeguard your brand assets and detect infringements with ease. Strengthen identity and build value.',
    icon: <Search className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Future Prediction',
    description: 'Utilize data from all touchpoints to enhance efficiency and maximize ROI. Anticipate actions.',
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Data Security',
    description: 'Robust end-to-end encryption, SSL protocols, automated backups, and ISO standards.',
    icon: <Lock className="w-8 h-8 text-blue-600" />
  },
  {
    title: '24/7 Support',
    description: '24/7 customer support backed by domain experts to ensure seamless onboarding.',
    icon: <Headphones className="w-8 h-8 text-blue-600" />
  }
];

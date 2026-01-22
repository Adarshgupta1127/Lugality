import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

export interface JobListing {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  department: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  category: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
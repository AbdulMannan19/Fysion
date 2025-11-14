
import type React from 'react';

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description:string;
  tags: string[];
  url?: string;
}

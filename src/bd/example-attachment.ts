import {
  FileCodeIcon,
  FileTextIcon,
  LucideIcon,
  TableIcon,
} from 'lucide-react';

type Item = {
  name: string;
  meta: string;
  icon?: LucideIcon;
  src?: string;
};

export const images = [
  {
    name: 'workspace.png',
    meta: 'PNG · 820 KB',
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80',
    alt: 'Workspace',
  },
  {
    name: 'desk-reference.jpg',
    meta: 'JPG · 1.1 MB',
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80',
    alt: 'Desk',
  },
  {
    name: 'office-reference.jpg',
    meta: 'JPG · 940 KB',
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80',
    alt: 'Office',
  },
];

export const items: Item[] = [
  { name: 'briefing-notes.pdf', meta: 'PDF · 1.4 MB', icon: FileTextIcon },
  {
    name: 'workspace.png',
    meta: 'PNG · 820 KB',
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80',
  },
  { name: 'customers.csv', meta: 'CSV · 18 KB', icon: TableIcon },
  { name: 'renderer.tsx', meta: 'TSX · 12 KB', icon: FileCodeIcon },
];

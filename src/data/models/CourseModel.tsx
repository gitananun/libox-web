import languages from 'utils/languages';

export interface CourseModel {
  id: number;
  slug: string;
  title: string;
  rating: number;
  price: number | string;
  length: number;
  language?: string;
  likes: number;
  description: string;
  lastUpdated: Date;
  createdAt: Date;
}

export const courseFromMap = (map: any): CourseModel => {
  return {
    id: map['id'],
    slug: map['slug'],
    title: map['title'],
    length: map['length'],
    likes: map['likes'] ?? 0,
    rating: map['rating'] ?? 0,
    description: map['description'],
    createdAt: new Date(map['created_at']),
    language: map['language'] && languages[map['language']].name,
    price: map['price']?.toFixed(2) ?? 'free',
    lastUpdated: new Date(map['last_updated']),
  };
};

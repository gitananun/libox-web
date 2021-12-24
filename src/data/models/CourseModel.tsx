import languages from 'utils/languages';
import { categoryFromMap, CategoryModel } from './CategoryModel';
import { instructorFromMap, InstructorModel } from './InstructorModel';

export interface CourseModel {
  id: number;
  slug: string;
  title: string;
  price: number;
  likes: number;
  rating: number;
  length: number;
  createdAt: Date;
  lessons?: number;
  viewers?: number;
  language?: string;
  lastUpdated: Date;
  imageUrl?: string;
  description: string;
  certification: boolean;
  categories: CategoryModel[];
  instructors: InstructorModel[];
}

export const courseFromMap = (map: any): CourseModel => {
  return {
    id: map['id'],
    slug: map['slug'],
    title: map['title'],
    length: map['length'],
    lessons: map['lessons'],
    viewers: map['viewers'],
    likes: map['likes'] ?? 0,
    rating: map['rating'] ?? 0,
    description: map['description'],
    price: map['price']?.toFixed(2) ?? 0,
    createdAt: new Date(map['created_at']),
    lastUpdated: new Date(map['last_updated']),
    certification: map['certification'] ?? false,
    language: map['language'] && languages[map['language']].name,
    imageUrl: map['image_path'] && `${process.env.REACT_APP_API_BASE_URL}/${map['image_path']}`,
    categories: map['categories'] ? map['categories'].map((e: any) => categoryFromMap(e)) : [],
    instructors: map['instructors'] ? map['instructors'].map((e: any) => instructorFromMap(e)) : [],
  };
};

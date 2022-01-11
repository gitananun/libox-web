export interface StoreCourseBody {
  image: any;
  title: string;
  badge: number;
  lessons: number;
  createdAt: Date;
  updatedAt: Date;
  language: string;
  description: string;
  categories: number[];
  certification: boolean;
}

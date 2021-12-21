export interface Course {
  id: bigint;
  slug: string;
  title: string;
  rating?: number;
  price?: number;
  length?: number;
  language?: string;
  likes?: number;
  description?: string;
  lastUpdated?: Date;
  createdAt?: Date;
}

export const courseFromMap = (map: any): Course => ({
  id: map['id'],
  slug: map['slug'],
  title: map['title'],
  rating: map['rating'],
  price: map['price'],
  length: map['length'],
  language: map['language'],
  likes: map['likes'],
  description: map['description'],
  lastUpdated: new Date(map['last_updated']),
  createdAt: new Date(map['created_at']),
});

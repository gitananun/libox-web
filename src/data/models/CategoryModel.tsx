export interface CategoryModel {
  id: number;
  name: string;
  slug: string;
  parentId?: number;
}

export const categoryFromMap = (map: any): CategoryModel => {
  return {
    id: map['id'],
    name: map['name'],
    slug: map['slug'],
    parentId: map['parent_id'],
  };
};

export interface BadgeModel {
  id: number;
  name: string;
}

export const badgeFromMap = (map: any): BadgeModel => {
  return {
    id: map['id'],
    name: map['name'],
  };
};

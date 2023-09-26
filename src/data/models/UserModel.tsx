export interface UserModel {
  id: number;
  name?: string;
  email: string;
  role?: number;
  avatar: string;
  createdAt: Date;
  fullName: string;
  lastname?: string;
  dateOfBirth?: Date;
  emailVerifiedAt: Date;
}

export const userFromMap = (map: any): UserModel => {
  return {
    id: map['id'],
    role: map['role'],
    name: map['name'],
    email: map['email'],
    lastname: map['lastname'],
    createdAt: map['created_at'],
    dateOfBirth: map['date_of_birth'],
    emailVerifiedAt: map['email_verified_at'],
    fullName: map['name'] + ' ' + map['lastname'],
    avatar: `https://robohash.org/${map['email']}`,
  };
};

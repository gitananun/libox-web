export interface UserModel {
  id: number;
  name?: string;
  lastname?: string;
  email: number;
  role?: number;
  dateOfBirth?: Date;
  emailVerifiedAt: Date;
  createdAt: Date;
}

export const userFromMap = (map: any): UserModel => {
  return {
    id: map['id'],
    name: map['name'],
    lastname: map['lastname'],
    email: map['email'],
    role: map['role'],
    dateOfBirth: map['date_of_birth'],
    emailVerifiedAt: map['email_verified_at'],
    createdAt: map['createdAt'],
  };
};

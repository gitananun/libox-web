export interface InstructorModel {
  id: number;
  name: string;
  lastname: string;
  fullName: string;
  jobTitle: string;
  createdAt: Date;
}

export const instructorFromMap = (map: any): InstructorModel => {
  return {
    id: map['id'],
    name: map['name'],
    lastname: map['lastname'],
    createdAt: new Date(map['created_at']),
    fullName: `${map['name']} ${map['lastname']}`,
    jobTitle: map['job_title'] === '' ? 'Instructor' : map['job_title'],
  };
};

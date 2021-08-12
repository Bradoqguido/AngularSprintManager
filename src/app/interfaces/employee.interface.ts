export interface Employee {
  idUser: string,
  name: string,
  email: string,
  photoUrl: string,
  job: ['Developer', 'Designer', 'Manager', 'Observer']
  active: boolean,
  idProject: string
}

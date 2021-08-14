export interface Employee {
  id: string,
  name: string,
  email: string,
  photoUrl: string,
  job: ['Developer', 'Designer', 'Manager', 'Observer']
  active: boolean,
  idProject: string
}

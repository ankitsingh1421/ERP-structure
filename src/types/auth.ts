export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  permissions: Permission[];
  departmentId: string;
}

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'EMPLOYEE';

export interface Permission {
  id: string;
  name: string;
  description: string;
}
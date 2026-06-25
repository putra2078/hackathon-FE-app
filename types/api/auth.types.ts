export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface LoginReq {
  email: string;
  password: string;
}

export interface RegisterReq {
  name: string;
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
  user: User;
}

export interface RegisterRes {
  user: User;
}


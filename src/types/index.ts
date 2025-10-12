export type User = {
  id: string;
  name: string;
  email: string;
};

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
}

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
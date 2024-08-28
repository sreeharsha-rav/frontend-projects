export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  is_saved: boolean;
}

export interface NewPost {
  title: string;
  body: string;
  author: string;
}

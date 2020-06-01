import { Upload } from "./strapi";

export interface BlogT {
  banner: Upload;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

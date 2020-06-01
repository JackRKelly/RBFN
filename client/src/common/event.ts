import { Upload } from "./strapi";

export interface EventT {
  banner: Upload;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  date: string;
  time: string;
  address: string;
  __v: number;
  _id: string;
}

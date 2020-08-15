import { Upload } from "./strapi";

export interface NewsletterT {
  banner: Upload;
  link: string;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  description: string;
  date: string;
  time: string;
  address: string;
  __v: number;
  _id: string;
}

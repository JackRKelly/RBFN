import { Upload } from "./strapi";

export interface SpeakerT {
  image: Upload;
  link: string;
  title: string;
  name: string;
  date: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  time: string;
  address: string;
  __v: number;
  _id: string;
}

import { Upload } from "./strapi";

export interface SpeakerT {
  banner: Upload;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  date: string;
  time: string;
  __v: number;
  _id: string;
}

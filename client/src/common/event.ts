import { Upload } from "./strapi";

export interface EventT {
  banner?: Upload;
  content: string;
  title: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  type: string;
  image: {
    url: string;
  };
  isSpeakerSeries: boolean;
  date: string;
  name: string;
  link: string;
  time: string;
  address: string;
  __v: number;
  _id: string;
}

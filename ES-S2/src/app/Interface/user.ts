import { iPost } from "./post";

export interface iUser {
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  image:string;
  title:string;
  todo?: iPost[];
}

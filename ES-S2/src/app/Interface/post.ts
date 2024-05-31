import { iUser } from "./user";

export interface iPost {
  id: number;
  todo:string;
  completed:boolean;
  userId:number;
  user ?:iUser;
}

import { User } from "entities/User";

export default interface Comment {
  id: string;
  user: User;
  text: string;
}
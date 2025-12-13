import LoginSchema from "features/AuthByUserName/model/types/LoginSchema";
import { UserSchema } from "entities/User";

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginSchema;
}
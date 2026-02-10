import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import LoginSchema from "../types/LoginSchema";

const loginForm: LoginSchema = { password: '', username: '', isLoading: true };

const getLoginState = (state: StateSchema) => state.loginForm || loginForm;

export default getLoginState;
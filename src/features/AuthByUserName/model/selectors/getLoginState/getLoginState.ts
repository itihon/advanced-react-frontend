import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getLoginState = (state: StateSchema) => state.loginForm;

export default getLoginState;
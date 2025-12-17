import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getLoginState = (state: StateSchema) => state.loginForm || { password: '', username: '', isLoading: true };

export default getLoginState;
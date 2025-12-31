import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getUsername = (state: StateSchema) => Object(state.loginForm).username || '';

export default getUsername;
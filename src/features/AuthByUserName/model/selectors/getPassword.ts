import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getPassword = (state: StateSchema) => Object(state.loginForm).password || '';

export default getPassword;
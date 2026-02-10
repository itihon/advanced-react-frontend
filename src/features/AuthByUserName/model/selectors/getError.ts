import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getError = (state: StateSchema) => Object(state.loginForm).error || '';

export default getError;
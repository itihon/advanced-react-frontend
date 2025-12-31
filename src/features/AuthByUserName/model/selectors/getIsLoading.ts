import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getIsLoading = (state: StateSchema) => Object(state.loginForm).isLoading || false;

export default getIsLoading;
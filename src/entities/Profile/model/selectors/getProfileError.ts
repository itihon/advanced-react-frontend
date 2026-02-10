import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileError = (state: StateSchema) => state.profile?.error;

export default getProfileError;
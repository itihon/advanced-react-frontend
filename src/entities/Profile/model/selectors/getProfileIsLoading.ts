import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;

export default getProfileIsLoading;
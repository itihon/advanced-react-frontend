import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileData = (state: StateSchema) => state.profile?.data;

export default getProfileData;
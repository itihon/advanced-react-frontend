import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileCountry = (state: StateSchema) => state.profile?.data?.country;

export default getProfileCountry;
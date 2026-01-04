import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileCity = (state: StateSchema) => state.profile?.data?.city;

export default getProfileCity;
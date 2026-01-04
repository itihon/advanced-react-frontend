import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileCurrency = (state: StateSchema) => state.profile?.data?.currency;

export default getProfileCurrency;
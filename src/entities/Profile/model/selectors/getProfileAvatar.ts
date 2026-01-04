import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileAvatar = (state: StateSchema) => state.profile?.data?.avatar;

export default getProfileAvatar;
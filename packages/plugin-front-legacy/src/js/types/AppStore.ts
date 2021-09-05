import { UpdateUrlReducer } from "~store/reducers/updateUrl";
import { LoginReducer } from "~store/reducers/login";
import { ImagesReducer } from "~store/reducers/images";

interface AppStore {
    updateUrl: UpdateUrlReducer;
    login: LoginReducer;
    images: ImagesReducer;
}

export default AppStore;

import { UpdateUrlReducer } from "~store/reducers/updateUrl";
import { LoginReducer } from "~store/reducers/login";
import { ImagesReducer } from "~store/reducers/images";

interface IAppStore {
    updateUrl: UpdateUrlReducer;
    login: LoginReducer;
    images: ImagesReducer;
}

export default IAppStore;

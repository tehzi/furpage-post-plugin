import React, { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBan,
    faPlus,
    faShippingFast,
    faSignInAlt,
    faSync,
    faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { chain, isNull } from "lodash";
import { canAdd, isAdded, isQueue } from "~helpers/image";
import AppStore from "~types/AppStore";
import { ImageState } from "~store/reducers/images";

type InnerSelectedProps = Pick<
    AppStore["login"],
    "checkFailed" | "hasPermission" | "loading"
> & {
    loginIn: boolean;
    image: ImageState;
};

const ButtonState: FC = () => {
    const innerProperties = useSelector<AppStore, InnerSelectedProps>(
        ({
            login: {
                auth: { userId = null } = {},
                checkFailed = null,
                hasPermission = null,
                loading,
            } = {},
            images: { [window.location.href]: image = null } = {},
        }) => ({
            loginIn: !!userId,
            checkFailed,
            hasPermission,
            image,
            loading,
        }),
    );
    const {
        loginIn = null,
        checkFailed = null,
        hasPermission = null,
        loading = false,
        image,
    } = innerProperties;

    return (
        <>
            <FontAwesomeIcon
                icon={chain([
                    loading && faSync,
                    !loginIn && faSignInAlt,
                    !isNull(checkFailed) && !hasPermission && faUnlock,
                    checkFailed === true && faBan,
                    isQueue(image) && faShippingFast,
                    isAdded(image) && faBan,
                    canAdd(image) && faPlus,
                    faSync,
                ])
                    .compact()
                    .first()
                    .value()}
            />
            {chain([
                loading && "Загрузка...",
                !loginIn && "Авторизоваться",
                !isNull(checkFailed) &&
                    !hasPermission &&
                    "Проверка прав доступа",
                checkFailed === true && "Нет прав доступа",
                isQueue(image) && "В очереди",
                isAdded(image) && "Уже добавлено",
                canAdd(image) && "Добавить",
                "Загрузка...",
            ])
                .compact()
                .first()
                .value()}
        </>
    );
};

export default memo(ButtonState);

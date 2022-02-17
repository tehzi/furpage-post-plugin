import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteAuth, vkAuth } from "~actions/login";
import AppStore from "~types/AppStore";

const Popup: FC = () => {
    let loginIn = false;
    const innerSelectedProperties = useSelector<AppStore, Pick<AppStore, "login">>(({ login }) => ({ login }));
    const { login } = innerSelectedProperties;

    loginIn = !!login?.auth?.userId;

    const dispatch = useDispatch();

    const onAuthToggle = (): void => {
        dispatch(loginIn ? deleteAuth() : vkAuth());
    };

    return (
        <Button onClick={onAuthToggle}>
            {loginIn && <>Удалить авторизацию</>}
            {!loginIn && <>Авторизоваться</>}
        </Button>
    );
};

export default memo(Popup);

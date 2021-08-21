import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteAuth, vkAuth } from "~actions/login";

const Popup: FC = () => {
    const innerSelectedProperties = useSelector(
        ({ login: { auth: { userId = null } = {} } = {} }) => ({
            loginIn: !!userId,
        }),
    );
    const { loginIn } = innerSelectedProperties;
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

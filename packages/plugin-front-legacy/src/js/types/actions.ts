import { Action } from "redux";

export type Payload<T> = {
    payload: T;
};

export type ActionWithPayload<T> = Partial<Payload<T>> & Action<string>;

export type CallableAction<T = undefined> = (payload?: T) => ActionWithPayload<T>;

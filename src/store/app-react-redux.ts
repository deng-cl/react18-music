import { type TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from "react-redux";
import store from ".";

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type IDispatchType = typeof store.dispatch
export const useAppDispatch: () => IDispatchType = useDispatch

export const appShallowEqual = shallowEqual

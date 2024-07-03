// -- 对 react-redux 库中的 useSelector 进行修改，使其可以动态定义对应回调中的 state 参数的类型 --> 为了代码的内聚性，同时将对应的 useDispatch 和 shallowEqual 也在此重新定义导出
import { type TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from "react-redux";
import store from ".";

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type IDispatchType = typeof store.dispatch
export const useAppDispatch: () => IDispatchType = useDispatch

export const appShallowEqual = shallowEqual

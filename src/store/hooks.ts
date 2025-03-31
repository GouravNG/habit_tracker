import { useDispatch, useSelector } from "react-redux"
import { TAppDispatch, TRootState } from "./habbitStore"

export const useTypedSelector = useSelector.withTypes<TRootState>()
export const useTypedDispatch = useDispatch.withTypes<TAppDispatch>()

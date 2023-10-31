import { publicRequest } from "../../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/loginUser", user);
        console.log(res.data)
        dispatch(loginSuccess(res.data))
        console.log("success")
    } catch (error) {
        console.error(error)
        dispatch(loginFailure(error))
    }
}
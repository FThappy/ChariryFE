import { publicRequest, userRequest } from "../../requestMethods";
import { loginFailure, loginStart, loginSuccess, updateImageStart, updateImageSuccess, updateImageFailure } from "./userRedux"

export const login = async (dispatch, user) => {
    console.log("chạy đến 1")
    dispatch(loginStart());
    try {
        console.log("chạy đến 2");
        const res = await publicRequest.post("/auth/loginUser", user);
        console.log(res);

        dispatch(loginSuccess(res.data))
        console.log("success")
    } catch (error) {
        console.error(error)
        dispatch(loginFailure())
        throw error
    }
}
export const updateImg = async (dispatch,data) => {
    console.log(data.img);
    dispatch(updateImageStart());
    try {
        console.log("chạy đến 1")
        const res = await userRequest.put(`users/uploadImage/${data.id}`,{img:data.img})
        console.log(res.data.user);
        dispatch(updateImageSuccess(res.data.user));
        return res.data
    } catch (error) {
        dispatch(updateImageFailure());
        throw error
    }
}
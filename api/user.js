import axios from "axios";
import { login, loginError, registerError } from "../redux/features/userSlice";

export const signin = async (dispatch, user) => {
  try {
    const { data } = await axios.post(
      "http://192.168.100.180:5000/api/user/login",
      user
    );
    dispatch(login(data));
  } catch (error) {
    dispatch(loginError(error.response.data.message));
  }
};
export const signup = async (dispatch, user) => {
  try {
    const { data } = await axios.post(
      "http://192.168.100.180:5000/api/user/register",
      user
    );
    dispatch(register(data));
  } catch (error) {
    dispatch(registerError(error.response.data.message));
  }
};

import { default as axios } from "../axiosConfig";

import swal from "sweetalert";

export const register = (data, history) => async (dispatch) => {
  try {
    await axios.post("/users", {
      username: data.username,
      email: data.email,
      password: data.password,
    });
    swal(
      "Success",
      "Register successful, check your email to activation",
      "success"
    );
    history.push("/login");
  } catch (error) {
    swal("Failed", error.response.data.message, "error");
  }
  dispatch({ type: "REQUEST" });
};

import * as actionTypes from "./actionTypes";
import axios from "../../axios-messages";

export const submitFormStarted = () => {
  return {
    type: actionTypes.SUBMIT_FORM_STARTED,
  };
};

export const submitFormSuccess = () => {
  return {
    type: actionTypes.SUBMIT_FORM_SUCCESS,
  };
};

export const submitFormFail = () => {
  return {
    type: actionTypes.SUBMIT_FORM_FAIL,
  };
};

export const loginStarted = () => {
  return {
    type: actionTypes.LOGIN_STARTED,
  };
};

export const loginSuccess = (user) => {
  const userData = Object.keys(user).map((userData) => {
    return { [userData]: user[userData] };
  });
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user: userData,
  };
};

export const loginFail = () => {
  return {
    type: actionTypes.LOGIN_FAIL,
  };
};

export const submitForm = (form) => {
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    process.env.KEY;
  if (form.name) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      process.env.KEY;
  }
  return (dispatch) => {
    dispatch(form.name ? submitFormStarted() : loginStarted());
    const authData = {
      displayName: form.name,
      email: form.email,
      password: form.password,
      returnSecureToken: true,
    };
    axios.post(url, authData).then((response) => {
      if (form.name) {
        const newUser = {
          name: form.name,
          email: form.email,
        };
        axios.put(`/users/${response.data.localId}.json`, newUser).then(
          (response) => (dispatch = submitFormSuccess())
          // dispatch(
          //   submitFormSuccess({
          //     name: response.data.name,
          //     email: response.data.email,
          //   })
          // )
        );
      } else {
        const user = {
          displayName: response.data.displayName,
          idToken: response.data.idToken,
          localId: response.data.localId,
          expiresIn: response.data.expiresIn,
        };
        dispatch(loginSuccess(user));
        console.log("is signed up", response.data);
      }
    });
  };
};

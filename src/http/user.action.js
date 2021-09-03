import axios from "axios";
import { API_URL, API_URL_WS, API_URL_WSS } from "../config";
import { setWebsocketAC } from "../redux/chatReducer";
import { hideLoaderAC, showLoaderAC } from "../redux/loaderReducer";
import { setUserAC } from "../redux/userReducer";
import { messageListenerWS, onCloseWS, openWS } from "../websocket/websocket";
import { getLists } from "./list.actions";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}api/user/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message, "--error--");
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.post(`${API_URL}api/user/login`, {
        email,
        password,
      });
      dispatch(hideLoaderAC());

      dispatch(setUserAC(response.data.user));
      localStorage.setItem("token", response.data.token);
      dispatch(await getLists());
      ;
      const wS = new WebSocket(window.location.protocol === 'http' ?  API_URL_WS : API_URL_WSS + 'api/chat/');
      dispatch(setWebsocketAC(wS));
      openWS(wS);
      messageListenerWS(wS);
      onCloseWS(wS);
    } catch (e) {
      console.log(e);
      dispatch(hideLoaderAC());

    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}api/user/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUserAC(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      localStorage.removeItem("token");
      console.log(e, 'auth');
    }
  };
};

export const changePassword = (email, password, newPassword) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.put(`${API_URL}api/user/changePassword`, {
        email,
        password,
        newPassword
      });
      dispatch(hideLoaderAC());
      alert(response.data.message);
    } catch (e) {
      console.log(e);
      dispatch(hideLoaderAC());
    }
  };
};


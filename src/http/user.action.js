import axios from "axios";
import { API_URL, API_URL_WS } from "../config";
import { setWebsocketAC } from "../redux/chatReducer";
import { hideLoaderAC, showLoaderAC } from "../redux/loaderReducer";
import { setUserAC } from "../redux/userReducer";
import { messageListenerWS, openWS } from "../websocket/websocket";
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
      dispatch(setUserAC(response.data.user));
      localStorage.setItem("token", response.data.token);
      setTimeout((null),1000);
      await getLists();
      const wS = new WebSocket(API_URL_WS + 'api/chat/');
      dispatch(setWebsocketAC(wS));
      openWS(wS);
      messageListenerWS(wS)
      dispatch(hideLoaderAC());
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



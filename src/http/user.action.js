import axios from "axios";
import { API_URL, API_URL_WS } from "../config";
import { setWebsocketAC } from "../redux/chatReducer";
import { setUserAC } from "../redux/userReducer";
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
      const response = await axios.post(`${API_URL}api/user/login`, {
        email,
        password,
      });
      dispatch(setUserAC(response.data.user));
      localStorage.setItem("token", response.data.token);
      const wS = new WebSocket(API_URL_WS + 'api/chat/');;
      dispatch(setWebsocketAC(wS));
      await getLists();
      
    } catch (e) {
      console.log(e.response.data.message);
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
    }
  };
};



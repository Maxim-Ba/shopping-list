import axios from "axios";
import { API_URL } from "../config";
import { hideLoaderAC, showLoaderAC } from "../redux/loaderReducer";
import { updateUserAC, updateChatAC } from "../redux/chatReducer";

export const getChat = (listID) =>{
  return async (dispatch) =>{
    try {
      dispatch(showLoaderAC());
      const response = await axios.post(
        `${API_URL}api/chat/`,
        {
          listID
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        dispatch(hideLoaderAC());
        console.log(response)
        dispatch(updateChatAC(response.data.messages));
        dispatch(updateUserAC(response.data.users));

    } catch (error) {
      dispatch(hideLoaderAC());
      console.log(error);
    }
  };
  
};
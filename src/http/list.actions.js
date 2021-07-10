import axios from "axios";
import { API_URL } from "../config";
import { setAllGroupsAC } from "../redux/ItemListReducer";
import { setListOfListsAC } from "../redux/listReducer";
import { setColorofListAC, setIDListAC, setNameofListAC } from "../redux/titleOfListReduser";


export const ceateList = (name, color) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}api/list/create`,
        {
          name,
          color,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setNameofListAC(response.data.name));
      dispatch(setColorofListAC(response.data.color));
      dispatch(setAllGroupsAC({groups:response.data.groups,deleted:response.data.deleted}));
      dispatch(setIDListAC(response.data._id));
    } catch (error) {
      console.log(error.response.data.message, "--error--");
    }
  };
};
export const getList = () => {
  return async (dispatch) => {
    try {
      console.log('sdsd');
      const response = await axios.get(
        `${API_URL}api/list/`,
        
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log( Array.isArray(response.data));
      dispatch(setListOfListsAC(response.data));

    } catch (error) {
      console.log(error, "--error--");
    }
  };
};
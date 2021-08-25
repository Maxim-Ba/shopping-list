import axios from "axios";
import { API_URL } from "../config";
import { setAllGroupsAC } from "../redux/ItemListReducer";
import { setListOfListsAC, setSharedListsAC } from "../redux/listReducer";
import { hideLoaderAC, showLoaderAC } from "../redux/loaderReducer";
import { setColorofListAC, setIDListAC, setNameofListAC } from "../redux/titleOfListReduser";
import { store } from "../redux/store";

export const ceateList = (name, color) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
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
      dispatch(hideLoaderAC());
    } catch (error) {
      dispatch(hideLoaderAC());
      console.log(error.response.data.message, "--error--");
    }
  };
};
export const getLists = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.get(
        `${API_URL}api/list/`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(hideLoaderAC());
      dispatch(setListOfListsAC(response.data));
      if (!store.getState().titleOfListReduser._id) {
        dispatch(setNameofListAC(response.data[0].name));
        dispatch(setColorofListAC(response.data[0].color));
        dispatch(setAllGroupsAC({groups:response.data[0].groups,deleted:response.data[0].deleted}));
        dispatch(setIDListAC(response.data[0]._id));
      }
    } catch (error) {
      console.log(error, "--error--");
      dispatch(hideLoaderAC());
    }
  };
};
export const getList = (listId) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.get(
        `${API_URL}api/list/${listId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(hideLoaderAC());
      dispatch(setNameofListAC(response.data.name));
      dispatch(setColorofListAC(response.data.color));
      dispatch(setAllGroupsAC({groups:response.data.groups,deleted:response.data.deleted}));
      dispatch(setIDListAC(response.data._id));
    } catch (error) {
      console.log(error, "--error--");
      dispatch(hideLoaderAC());
    }
  };
};

export const getSharedList = (userID) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.get(
        `${API_URL}api/list/sharedLists/${userID}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(hideLoaderAC());
      dispatch(setSharedListsAC(response.data));
      
    } catch (error) {
      console.log(error, "--error--");
      dispatch(hideLoaderAC());
    }
  };
};

export const saveList = (name, color, _id, groups, deleted) => {
  return async (dispatch) => {
    console.log( "--saveList--");

    try {
      dispatch(showLoaderAC());
      const response = await axios.put(
        `${API_URL}api/list/save`,
        {
          name,
          color,
          _id, 
          groups, 
          deleted
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setAllGroupsAC({groups:response.data.groups,deleted:response.data.deleted}));  // потом убрать
      dispatch(setNameofListAC(response.data.name));  
      dispatch(setColorofListAC(response.data.color));  
      dispatch(setIDListAC(response.data._id));
      dispatch(hideLoaderAC());
    } catch (error) {
      console.log(error, "--error--");
      dispatch(hideLoaderAC());

    }
  };
};

export const deleteList = (listId) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
      const response = await axios.delete(
        `${API_URL}api/list/${listId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(hideLoaderAC());
      dispatch(setListOfListsAC(response.data));
    } catch (error) {
      console.log(error, "--error--");
      dispatch(hideLoaderAC());
    }
  };
};
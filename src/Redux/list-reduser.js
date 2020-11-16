import { getUserbyIdAPI } from "../API/api";

const SET_List = 'SET_USER_DATA_LIST'

let initState =
{
   ListOfDisciplinesPage: {}
}

export const ListReduser = (state = initState, action) => {
   let copyState = {
      ...state
   }
   switch (action.type) {
      case SET_List:
         copyState.ListOfDisciplinesPage = {};
         copyState.ListOfDisciplinesPage = { ...action.ListOfDisciplinesPage };
         return copyState;
      //return { ...state, users: [...state.users, action.users] }
      default:
         return state;
   }
}

export const getUserbyIdThunkCreator = (id) => {
   return (dispatch) => {
      getUserbyIdAPI(id).then(data => {
         console.log("getUserbyIdThunkCreator");
         console.log(data); debugger
         dispatch(setListAC(data));
      });
   }
}

export const setListAC = (ListOfDisciplines) => {
   let action = { type: SET_List, ListOfDisciplines }
   return action;
}
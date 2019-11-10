import {TYPE_INITIAL_STATE , TYPE_INITIAL_TYPE } from './types/types'

//===============================
// @Reducer
//===============================
export const initialState: TYPE_INITIAL_STATE = {
  data: false,
  payload: [],
  text:'',
};
const reducer = (state: TYPE_INITIAL_STATE | Object, action: TYPE_INITIAL_TYPE) => {
  switch (action.type) {
    case "INITIAL":
      return initialState;
    case "READY":
      return {
        data: action.payload
      };
    case "SEARCH":
      return {
        data: action.payload.filter(
          (item: any) =>
            item.ja.includes(action.text) || item.en.includes(action.text)
        )
      };
    case "PEOPLE":
      return {
        data: action.payload.filter((item: any) => item.category === "people")
      };
    case "ANIMALS":
      return {
        data: action.payload.filter((item: any) => item.category === "animals")
      };
    case "FOODS":
      return {
        data: action.payload.filter((item: any) => item.category === "foods")
      };
    case "ACTIVITY":
      return {
        data: action.payload.filter((item: any) => item.category === "activity")
      };
    case "PLACE":
      return {
        data: action.payload.filter((item: any) => item.category === "place")
      };
    case "OBJECT":
      return {
        data: action.payload.filter((item: any) => item.category === "object")
      };
    case "SYMBOL":
      return {
        data: action.payload.filter((item: any) => item.category === "symbol")
      };
    case "FLAG":
      return {
        data: action.payload.filter((item: any) => item.category === "flag")
      };
    default:
      return state;
  }
};

export default reducer;

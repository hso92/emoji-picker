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
            item.ja.includes(action.text) ||
            item.en.includes(action.text)
        )
      };
    case "PEOPLE":
      return {
        data: action.payload.filter((item:any) => item.category === "people")
      };
    case "ANIMALS":
      return {
        data: action.payload.filter((item: any) => item.category === "animals")
      };
    default:
      return state;
  }
};

export default reducer;

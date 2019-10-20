import React from "react";
import reducer from "./reducer";
import { initialState } from "./reducer";
import { TYPE_INITIAL_STATE, TYPE_INITIAL_TYPE } from "./types/types";

//===============================
// @Initialize
//===============================
const EMOJI_API = process.env.REACT_APP_EMOJI_API;
const Store = React.createContext<TYPE_INITIAL_STATE | any>(initialState);

// fetch emoji api
const EMOJI_LIST: any = async () => {
  try {
    const res = await fetch(EMOJI_API as any);
    const profileData = await res.json();
    return profileData;
  } catch (error) {
    console.error(error);
  }
};
// patch
const handleProfileReady = (data: TYPE_INITIAL_TYPE) : any => ({
  type: "READY",
  payload: data
});

//===============================
// @Provider
//===============================
const Provider: React.FC = ({ children }) => {
  const [isLoad, setIsLoad] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, []);

  React.useEffect(() => {
    const trigger = async () => {
      try {
        const profileData = await EMOJI_LIST();
        dispatch(handleProfileReady(profileData));
        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };
    trigger();
  }, []);

  return isLoad ? (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  ) : (
    <p>loading...</p>
  );
};

export { Store, Provider };

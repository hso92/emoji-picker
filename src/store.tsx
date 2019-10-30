import React from "react";
import reducer from "./reducer";
import storageReducer from "./storageReducer";
import { initialState } from "./reducer";
import { TYPE_INITIAL_STATE, TYPE_INITIAL_TYPE } from "./types/types";

//===============================
// @Initialize
//===============================
const EMOJI_API = process.env.REACT_APP_EMOJI_API;
const Store = React.createContext<TYPE_INITIAL_STATE | any>(initialState);

// fetch emoji api
const fetchEmoji: any = async () => {
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
  payload: data,
});

//===============================
// @Provider
//===============================
const Provider: React.FC = ({ children }) => {
  const [isLoad, setIsLoad] = React.useState(false);
  const [emojiState,setEmojiState] = React.useState('');
  const [state, dispatch] = React.useReducer(reducer, []);
  const [storage, storageDispatch] = React.useReducer<any,object>(storageReducer, [], () => {
    const storageData = window.localStorage.getItem("EMOJI");
    return storageData ? JSON.parse(storageData) : [] ;
  });

  React.useEffect(() => {
    const trigger = async () => {
      try {
        const profileData = await fetchEmoji();
        dispatch(handleProfileReady(profileData));
        setEmojiState(profileData);
        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };
    trigger();
  }, []);

  return isLoad ? (
    <Store.Provider
      value={{ state, dispatch, emojiState, storage, storageDispatch }}
    >
      {children}
    </Store.Provider>
  ) : (
    <p>loading...</p>
  );
};

export { Store, Provider };
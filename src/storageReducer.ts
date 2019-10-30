//===============================
// @Reducer
//===============================

export type TYPE_STORAGE = []
export  type TYPE_STORAGE_TYPE = {
  type: string;
  storage?: [];
};

const reducer = (state: TYPE_STORAGE, action: TYPE_STORAGE_TYPE) => {
  switch (action.type) {
    case "SET_LOCAL":
      return [
        ...state,
        {
          emoji: action.storage
        }
      ];
    default:
      return state;
  }
};

export default reducer;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "SET_FOLDERS":
      return {
        ...state,
        folders: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

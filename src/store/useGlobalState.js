import { useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useGlobalState;

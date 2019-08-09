import {
  HANDLE_INPUT_CHANGE,
  ADD_NEW_COMMENT,
  REMOVE_COMMENT
} from "../actions/actionTypes";
import uuid from "uuid/v4";
const initialState = {
  comments: [],
  fName: "",
  lName: "",
  subject: "",
  message: ""
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value
      };
    case ADD_NEW_COMMENT:
      const { fName, lName, subject, message, comments } = state;
      return {
        ...state,
        comments: [...comments, { id: uuid(), fName, lName, subject, message }],
        fName: "",
        lName: "",
        subject: "",
        message: ""
      };
    case REMOVE_COMMENT:
      console.log(state.comments, state.comments[0].id, payload);
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
      };
    default:
      return state;
  }
};
export default mainReducer;
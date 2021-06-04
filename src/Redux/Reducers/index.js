import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Constants/actionTypes"

const initialState = [
  {
    id: Math.random(),
    description: "Learn HTML & CSS",
    isDone: false,
  },

  {
    id: Math.random(),
    description: "Learn React JS",
    isDone: false,
  },

  {
    id: Math.random(),
    description: "Learn Redux ",
    isDone: false,
  },
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case COMPLETE_TASK:
      return state.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
    case DELETE_TASK:
      return state.filter((el) => el.id !== action.payload);
    case EDIT_TASK:
      return state.map((el) => (el.id === action.payload.id ? 
      {...el, description: action.payload.newDescription}:el));
    default:
      return state;
  }
};

export default taskReducer;



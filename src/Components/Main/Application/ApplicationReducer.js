/** @format */

export default function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_CAREER":
      return {
        career: action.payload,
        group: "semester",
        order: false,
      };
    case "CHANGE_GROUP":
      return {
        ...state,
        group: action.payload,
      };
    case "CHANGE_ORDER":
      return {
        ...state,
        order: !state.order,
      };
    default:
      return state;
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case "fetch_user":
      return action.payload;
    default:
      return state;
  }
}

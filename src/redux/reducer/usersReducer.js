let initialState;
if (localStorage.getItem("users")) {
  initialState = JSON.parse(localStorage.getItem("users"));
} else {
  localStorage.setItem("users", JSON.stringify([]));
  initialState = [];
}
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/create":
      localStorage.setItem("users", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    default:
      return state;
  }
}

export default usersReducer;

let initialState;
if (localStorage.getItem("posts")) {
  initialState = JSON.parse(localStorage.getItem("posts"));
} else {
  localStorage.setItem("posts", JSON.stringify([]));
  initialState = [];
}
function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "posts/create":
      return [...state, action.payload];
    case "posts/update":
      // logic for updating
      return state;
    case "posts/remove":
      // logic for removing
      return state;
    default:
      return state;
  }
}

export default postsReducer;

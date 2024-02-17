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
      localStorage.setItem("posts", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case "posts/update":
      // logic for updating
      return state;
    case "posts/delete":
      const postsId = state.map((post) => post.id);
      const postDeleteId = postsId.indexOf(action.payload);
      state?.splice(postDeleteId, 1);
      localStorage.setItem("posts", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default postsReducer;

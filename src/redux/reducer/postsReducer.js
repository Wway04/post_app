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
    case "posts/favorite":
      const postsIdFavorite = state.map((post) => post.id);
      if (postsIdFavorite.indexOf(action.payload.post_id) === -1) return state;
      let postFavoriteId = postsIdFavorite.indexOf(action.payload.post_id);
      const isFavorite = state[postFavoriteId].favorite?.indexOf(
        action.payload.user_id
      );
      if (isFavorite === -1) {
        state[postFavoriteId].favorite = [
          ...state[postFavoriteId].favorite,
          action.payload.user_id,
        ];
      } else {
        state[postFavoriteId].favorite.splice(isFavorite, 1);
      }
      localStorage.setItem("posts", JSON.stringify(state));
      return [...state];
    case "posts/delete":
      const postsIdDelete = state.map((post) => post.id);
      const postDeleteId = postsIdDelete.indexOf(action.payload);
      state?.splice(postDeleteId, 1);
      localStorage.setItem("posts", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default postsReducer;

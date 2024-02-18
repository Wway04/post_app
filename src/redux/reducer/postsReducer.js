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
    case "posts/edit":
      // logic for editing
      const postsIdEdit = state.map((post) => post.id);
      const postEditId = postsIdEdit.indexOf(action.payload.id);
      state[postEditId].content = action.payload.content;
      localStorage.setItem("posts", JSON.stringify(state));
      return [...state];
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
    case "posts/comment":
      // ktra xem id của post comment có trùng với id của post nằm trong posts
      // lấy được id của post -> thêm comment vào post.comment với: id, user_id, content
      const postsIdComment = state.map((post) => post.id);
      const postCommentId = postsIdComment.indexOf(action.payload.post_id);
      const comments = state[postCommentId].comment;
      const comment = {
        id: action.payload.id,
        user_id: action.payload.user_id,
        content: action.payload.content,
        currentTime: action.payload.currentTime,
      };
      state[postCommentId].comment = [...comments, comment];
      localStorage.setItem("posts", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default postsReducer;

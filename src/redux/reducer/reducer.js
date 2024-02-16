import accountReducer from "./accountReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = (state = {}, action) => {
  return {
    users: usersReducer(state.users, action),
    posts: postsReducer(state.posts, action),
    account: accountReducer(state.account, action),
  };
};

export default rootReducer;

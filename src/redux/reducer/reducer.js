import accountReducer from "./accountReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = (state, action) => {
  return {
    users: usersReducer(state, action),
    posts: postsReducer(state, action),
    account: accountReducer(state, action),
  };
};

export default rootReducer;

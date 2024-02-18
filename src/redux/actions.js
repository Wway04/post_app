// Users
export const userCreateAction = (
  user = {
    id: "",
    name: "",
    username: "",
    password: "",
  }
) => ({
  type: "users/create",
  payload: user,
});

// Posts
export const postAddAction = (
  post = {
    id: "",
    id_user: "",
    currentTime: "",
    name: "",
    content: "",
    favorite: [],
    comment: [],
  }
) => ({
  type: "posts/create",
  payload: post,
});
export const postDeleteAction = (id) => ({
  type: "posts/delete",
  payload: id,
});

export const postFavoriteAction = (post_id, user_id) => ({
  type: "posts/favorite",
  payload: { post_id, user_id },
});

export const postEditAction = (id, content) => ({
  type: "posts/edit",
  payload: { id, content },
});

export const postCommentAction = (
  comment = { id: "", post_id: "", user_id: "", currentTime: "", content: "" }
) => ({
  type: "posts/comment",
  payload: comment,
});

// Account
export const accountCurrentRegisterAction = (
  user = { username: "", password: "" }
) => ({
  type: "account/register",
  payload: user,
});

export const accountCurrentLoginAction = (
  user = { id: "", username: "", password: "" }
) => ({
  type: "account/login",
  payload: user,
});

export const accountCurrentLogOutAction = () => ({
  type: "account/logout",
  payload: {},
});

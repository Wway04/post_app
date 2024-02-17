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

export const postEditAction = (id) => ({
  type: "posts/edit",
  payload: id,
});

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

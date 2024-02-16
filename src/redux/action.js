// Users
export const userAddAction = (
  user = {
    id: "",
    name: "",
    username: "",
    password: "",
  }
) => ({
  type: "user/add",
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
  type: "post/add",
  payload: post,
});
export const postDeleteAction = (id) => ({
  type: "post/delete",
  payload: id,
});

export const postEditAction = (id) => ({
  type: "post/edit",
  payload: id,
});

export const accountCurrentLoginAction = (
  user = { username: "", password: "" }
) => ({
  type: "account/login",
  payload: user,
});
export const accountCurrentLogOutAction = () => ({
  type: "account/logout",
  payload: {},
});

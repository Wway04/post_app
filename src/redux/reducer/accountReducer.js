let initialState;
if (localStorage.getItem("account")) {
  initialState = JSON.parse(localStorage.getItem("account"));
} else {
  localStorage.setItem("account", JSON.stringify({}));
  initialState = {};
}

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/login":
      // users
      localStorage.setItem("account", JSON.stringify({ ...action.payload }));
      return { ...action.payload };
    case "account/register":
      return { ...action.payload };
    case "account/logout":
      // logic for updating
      localStorage.setItem("account", JSON.stringify({ ...action.payload }));
      return action.payload;
    default:
      return state;
  }
}

export default accountReducer;

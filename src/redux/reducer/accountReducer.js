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
      return { ...action.payload };
    case "account/register":
      console.log("action", action.payload);
      return { ...action.payload };
    case "account/logout":
      // logic for updating
      return action.payload;
    default:
      return state;
  }
}

export default accountReducer;

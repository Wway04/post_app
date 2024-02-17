import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";

import styles from "../Auth.module.scss";
import { accountCurrentLoginAction } from "../../../redux/actions";
import { usersSelector } from "../../../redux/selector";
import { useState } from "react";
import { authContext } from "../../../layouts/components/Header/Header";

const cx = classNames.bind(styles);
function Login() {
  const dispatch = useDispatch();
  const handleAuth = useContext(authContext);
  const users = useSelector(usersSelector);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const account = users.find(
      (user) => user.username === username && user.password === password
    );
    if (account) {
      dispatch(accountCurrentLoginAction(account));
      handleAuth();
    }
  };
  return (
    <div className={cx("login")}>
      <form>
        <label for="Auth_chk__rqasp" aria-hidden="true">
          Login
        </label>
        <input
          type="text"
          name="text"
          placeholder="Username"
          required=""
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

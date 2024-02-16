import classNames from "classnames/bind";

import styles from "../Auth.module.scss";

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("login")}>
      <form>
        <label for="Auth_chk__rqasp" aria-hidden="true">
          Login
        </label>
        <input type="email" name="email" placeholder="Email" required="" />
        <input type="password" name="pswd" placeholder="Password" required="" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

import classNames from "classnames/bind";
import { useContext } from "react";

import styles from "./Auth.module.scss";
import Login from "./Login";
import Register from "./Register";
import { authContext } from "../../layouts/components/Header/Header";

const cx = classNames.bind(styles);
function Auth() {
  const handleAuth = useContext(authContext);
  return (
    <div className={cx("wrapper")} onClick={handleAuth.handleAuth}>
      <div
        className={cx("inner")}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={cx("btn-close")} onClick={handleAuth.handleAuth}>
          X
        </button>
        <input type="checkbox" id={cx("chk")} aria-hidden="true" />
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default Auth;

import classNames from "classnames/bind";
import { DatePicker } from "antd";
import { useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.scss";
import Auth from "../../../components/Auth";
import { accountSelector } from "../../../redux/selector";
import { accountCurrentLogOutAction } from "../../../redux/actions";

const cx = classNames.bind(styles);

export const authContext = createContext();

function Header() {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);
  const isAccount = Object.keys(account).length === 0;
  const [auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!auth);
  };
  const handleLogout = () => {
    dispatch(accountCurrentLogOutAction());
  };
  return (
    <authContext.Provider value={handleAuth}>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <h1>PostApp</h1>

          {isAccount ? (
            <div className={cx("auth")}>
              <button onClick={handleAuth}>Login</button>
              <button onClick={handleAuth}>Register</button>
              {auth && <Auth />}
            </div>
          ) : (
            <div className={cx("account-current")}>
              <div className={cx("profile")}></div>
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
        </div>
      </header>
    </authContext.Provider>
  );
}

export default Header;

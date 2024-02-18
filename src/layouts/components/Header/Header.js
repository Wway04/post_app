import classNames from "classnames/bind";
import { Avatar, Button, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
  console.log("🚀 ~ Header ~ account:", account);
  const [auth, setAuth] = useState(false);
  const isAccount = Object.keys(account).length > 0 && !auth;
  const handleAuth = () => {
    setAuth(!auth);
  };
  const handleLogout = () => {
    dispatch(accountCurrentLogOutAction());
  };
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (username) => {
    console.log(account);
    api.info({
      message: `Welcome ${username}`,
      placement: "topLeft",
    });
  };
  const AUTHSCONTEXT = {
    handleAuth,
    openNotification,
  };

  return (
    <authContext.Provider value={AUTHSCONTEXT}>
      <header className={cx("wrapper")}>
        {contextHolder}
        <div className={cx("inner")}>
          <h1>PostApp</h1>
          {isAccount ? (
            <div className={cx("account-current")}>
              <div className={cx("profile")}>
                <Avatar size={30} icon={<UserOutlined />} />
              </div>
              <Button onClick={handleLogout}>Log out</Button>
            </div>
          ) : (
            <div className={cx("auth")}>
              <Button onClick={handleAuth}>Login</Button>
              <Button onClick={handleAuth}>Register</Button>
              {auth && <Auth />}
            </div>
          )}
        </div>
      </header>
    </authContext.Provider>
  );
}

export default Header;

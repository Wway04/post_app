import classNames from "classnames/bind";
import { useState, createContext } from "react";
import React from "react";
import { Formik, Field, Form } from "formik";

import styles from "./Header.module.scss";
import Auth from "../../../components/Auth";

const cx = classNames.bind(styles);

export const authContext = createContext();

function Header() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(!auth);
  };
  return (
    <authContext.Provider value={handleAuth}>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <h1>PostApp</h1>

          {false ? (
            <div className={cx("auth")}>
              <button onClick={handleAuth}>Login</button>
              <button onClick={handleAuth}>Register</button>
              {auth && <Auth />}
            </div>
          ) : (
            <div className={cx("account-current")}>
              <div className={cx("profile")}></div>
              <button>Log out</button>
            </div>
          )}
        </div>
      </header>
    </authContext.Provider>
  );
}

export default Header;

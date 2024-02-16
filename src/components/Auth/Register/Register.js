import classNames from "classnames/bind";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import styles from "../Auth.module.scss";

const cx = classNames.bind(styles);
function Register() {
  const [username, setUsername] = useState();
  console.log("🚀 ~ Register ~ username:", username);
  const [password, setPassword] = useState();
  console.log("🚀 ~ Register ~ password:", password);
  const [passwordConfirm, setPasswordConfirm] = useState();
  console.log("🚀 ~ Register ~ passwordConfirm:", passwordConfirm);
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    passwordConfirm: Yup.string(),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className={cx("register")}>
          <form>
            <label for="Auth_chk__rqasp" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="pswd"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="pswdConfirm"
              placeholder="Password confirm"
              required=""
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button>Sign up</button>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Register;

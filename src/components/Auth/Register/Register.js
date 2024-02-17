import classNames from "classnames/bind";
import { v4 as id } from "uuid";

import { useDispatch } from "react-redux";
import { useContext } from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import styles from "../Auth.module.scss";
import { authContext } from "../../../layouts/components/Header/Header";
import { userCreateAction } from "../../../redux/actions";

const cx = classNames.bind(styles);
function Register() {
  const dispatch = useDispatch();
  const handleAuth = useContext(authContext);

  return (
    <Formik
      initialValues={{
        id: id(),
        username: "",
        password: "",
        passwordConfirm: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.passwordConfirm) {
          errors.passwordConfirm = "Required";
        } else if (!(values.passwordConfirm === values.password)) {
          errors.passwordConfirm = "Invalid password";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        delete values.passwordConfirm;
        dispatch(userCreateAction(values));
        handleAuth();
      }}
    >
      {({
        errors,
        touched,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className={cx("register")}>
          <label htmlFor="Auth_chk__rqasp" aria-hidden="true">
            Sign up
          </label>
          <div className={cx("form-group")}>
            <Field
              type="text"
              name="username"
              placeholder="User name"
              required=""
            />
            <span>{touched.username && errors.username}</span>
          </div>
          <div className={cx("form-group")}>
            <Field
              type="text"
              name="password"
              placeholder="Password"
              required=""
            />
            <span>{touched.password && errors.password}</span>
          </div>
          <div className={cx("form-group")}>
            <Field
              type="password"
              name="passwordConfirm"
              placeholder="Password confirm"
              required=""
            />
            <span>
              {touched.passwordConfirm &&
                errors.passwordConfirm &&
                errors.passwordConfirm}
            </span>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;

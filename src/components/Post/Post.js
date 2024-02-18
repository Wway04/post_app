import classNames from "classnames/bind";
import { useState } from "react";
import { v4 as id } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "antd";

import { postAddAction } from "../../redux/actions";
import styles from "./Post.module.scss";
import { accountSelector } from "../../redux/selector";

const cx = classNames.bind(styles);

function Post() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const account = useSelector(accountSelector);
  const handleSubmit = () => {
    setLoading(true);
    if (!Object.keys(account).length) {
      setLoading(false);
      return;
    }
    const post = {
      id: id(),
      user_id: account.id,
      content: value,
      currentTime: new Date().toString(),
      favorite: [],
      comment: [],
    };
    setTimeout(() => {
      setLoading(false);
      dispatch(postAddAction(post));
      setValue("");
    }, 500);
  };
  return (
    <div className={cx("wrapper")}>
      <Input
        placeholder="Add a status"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="primary" loading={loading} onClick={handleSubmit}>
        Post
      </Button>
    </div>
  );
}

export default Post;

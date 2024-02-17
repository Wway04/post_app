import classNames from "classnames";
import { useState, useContext } from "react";
import { v4 as id } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { postAddAction } from "../../redux/action";
import styles from "./Post.module.scss";
import { accountSelector } from "../../redux/selector";

const cx = classNames.bind(styles);

function Post() {
  const dispatch = useDispatch();
  const [title, settTitle] = useState();
  const [value, setValue] = useState();
  const account = useSelector(accountSelector);
  const handleSubmit = () => {
    if (!Object.keys(account).length) {
      return;
    }
    const post = {
      id: id(),
      user_id: account.id,
      name: title,
      content: value,
      currentTime: new Date().toString(),
      favorite: [],
      comment: [],
    };
    dispatch(postAddAction(post));
    settTitle("");
    setValue("");
  };
  return (
    <div className={cx("wrapper")}>
      <input
        type="text"
        placeholder="Title status"
        value={title}
        onChange={(e) => settTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add a status"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default Post;

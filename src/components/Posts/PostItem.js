import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import styles from "./Posts.module.scss";
import { accountSelector } from "../../redux/selector";
import { postDeleteAction, postFavoriteAction } from "../../redux/actions";
import { useRef } from "react";

const cx = classNames.bind(styles);

function PostItem({ post }) {
  const dispatch = useDispatch();
  const accountId = useSelector(accountSelector).id;
  const postTime = new Date(post.currentTime);

  const handleDelete = () => {
    dispatch(postDeleteAction(post.id));
  };

  const handleFavorite = () => {
    if (!accountId) return;
    dispatch(postFavoriteAction(post.id, accountId));
  };

  const inputRef = useRef();

  const handleFocusComment = () => {
    inputRef.current.focus();
  };

  return (
    <div className={cx("post-item")}>
      <div className={cx("post-item-info")}>
        <p>{post.name}</p>
        <p>{moment(postTime, "YYYYMMDD").fromNow()}</p>
        <p>{post.content}</p>
        <p>{post.user_id}</p>
        <div className="amount-favorite">{post.favorite.length}</div>
        <div className={cx("post-item-actions")}>
          <button onClick={handleFavorite}>Favorite</button>
          <button onClick={handleFocusComment}>Comment</button>
        </div>
        <div className={cx("post-item-comment")}>
          <input type="text" ref={inputRef} />
          <button>Send</button>
        </div>
      </div>
      {accountId === post.user_id && (
        <div className={cx("post-item-tools")}>
          <button onClick={handleDelete}>Xoa</button>
          <button>Edit</button>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}

export default PostItem;

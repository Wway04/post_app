import classNames from "classnames/bind";
import { Typography } from "antd";

import {
  ClockCircleFilled,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  LikeFilled,
  MoreOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import styles from "./Posts.module.scss";
import { accountSelector } from "../../redux/selector";
import {
  postDeleteAction,
  postEditAction,
  postFavoriteAction,
} from "../../redux/actions";

const { Paragraph } = Typography;
const cx = classNames.bind(styles);

function PostItem({ post }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(post.content);
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

  useEffect(() => {
    dispatch(postEditAction(post.id, content));
  }, [content]);

  return (
    <>
      <div className={cx("post-item")}>
        <div className={cx("post-item-info")}>
          <Paragraph
            editable={{
              icon: <HighlightOutlined />,
              tooltip: "click to edit status",
              onChange: setContent,
            }}
          >
            {content}
          </Paragraph>
          <p>
            <ClockCircleFilled />
            {moment(postTime, "YYYYMMDD").fromNow()}
          </p>

          <div className="amount-favorite">
            <LikeFilled />
            {post.favorite?.length > 0 && post.favorite?.length}
          </div>
          <div className={cx("post-item-actions")}>
            <button onClick={handleFavorite}>
              <HeartOutlined />
              Favorite
            </button>
            <button onClick={handleFocusComment}>
              <CommentOutlined />
              Comment
            </button>
          </div>
          <div className={cx("post-item-comment")}>
            <input type="text" ref={inputRef} />
            <button>Send</button>
          </div>
        </div>
        {accountId === post.user_id && (
          <div className={cx("post-item-tools")}>
            <button onClick={handleDelete}>
              <DeleteOutlined />
              Delete
            </button>
          </div>
        )}
        <br />
        <br />
      </div>
      <Divider />
    </>
  );
}

export default PostItem;

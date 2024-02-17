import classNames from "classnames/bind";
import { useSelector } from "react-redux";

import styles from "./Posts.module.scss";
import PostItem from "./PostItem";
import { postsSelector } from "../../redux/selector";

const cx = classNames.bind(styles);
function Posts() {
  const posts = useSelector(postsSelector);

  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default Posts;

import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { accountSelector } from "../../redux/selector";
import { postDeleteAction } from "../../redux/actions";

function PostItem({ post }) {
  const dispatch = useDispatch();
  const accountId = useSelector(accountSelector).id;
  const postTime = new Date(post.currentTime);

  const handleDelete = () => {
    dispatch(postDeleteAction(post.id));
  };

  return (
    <div>
      <p>{post.name}</p>
      <p>{moment(postTime, "YYYYMMDD").fromNow()}</p>
      <p>{post.content}</p>
      <p>{post.user_id}</p>
      {accountId === post.user_id && (
        <div>
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

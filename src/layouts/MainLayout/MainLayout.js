import classNames from "classnames/bind";

import styles from "./MainLayout.module.scss";
import Header from "../components/Header";
import Posts from "../components/Posts";

const cx = classNames.bind(styles);
function MainLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

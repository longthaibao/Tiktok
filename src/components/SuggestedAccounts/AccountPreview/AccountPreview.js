import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa99c922712b5b90bcb90c9260ada59d.jpeg?x-expires=1698854400&x-signature=16DmTN8poo9nbCebqo91OQK73D0%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Cin</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Cin</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Liked</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;

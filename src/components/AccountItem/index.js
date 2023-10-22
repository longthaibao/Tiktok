import classNames from "classnames/bind";
import styles from "./AcountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../layout/components/Image";
const cx = classNames.bind(styles);
function AcountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1697997600&x-signature=kcVWLOCrKA9WsUUacSwIxhJR8JM%3D"
        alt="Hoa"
      ></Image>
      <div className={cx("info")}>
        <p className={cx("name")}>
          Dao Le Phuong Hoa
          <FontAwesomeIcon className={cx("checkicon")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>Phuong Hoa 222</span>
      </div>
    </div>
  );
}

export default AcountItem;

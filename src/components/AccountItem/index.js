import classNames from "classnames/bind";
import styles from "./AcountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AcountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d~c5_300x300.webp?x-expires=1697526000&x-signature=66vHSGiYGO0V%2FmIBC92MuqdxOAw%3D"
        alt="Hoa"
      ></img>
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

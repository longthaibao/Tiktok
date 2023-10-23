import classNames from "classnames/bind";
import styles from "./AcountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../layout/components/Image";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function AcountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src={data.avatar}
        alt={data.avatar}
      ></Image>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> {data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("checkicon")} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AcountItem;

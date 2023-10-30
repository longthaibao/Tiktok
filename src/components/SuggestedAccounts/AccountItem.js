import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PoperWrapper } from "../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview/AccountPreview";
const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <PoperWrapper>
          <AccountPreview />
        </PoperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        offset={[-20, 0]}
        interactive
        delay={[1000, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa99c922712b5b90bcb90c9260ada59d.jpeg?x-expires=1698854400&x-signature=16DmTN8poo9nbCebqo91OQK73D0%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Cin</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Cin</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};
export default AccountItem;

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          // visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <h4 className={cx("search-title")}>Acounts</h4>
                <AcountItem />
                <AcountItem />
                <AcountItem />
                <AcountItem />
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search Acount and Videos" spellCheck="false" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary icon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

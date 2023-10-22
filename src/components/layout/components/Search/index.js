import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import { SearchButton } from "~/components/Icons";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4]);
    }, 0);
  }, []);
  return (
    <div>
      <HeadlessTippy
        onClickOutside={handleHideResult}
        interactive
        visible={showResult && searchResult.length > 0}
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
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search Acount and Videos"
            spellCheck="false"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          <button className={cx("search-btn")}>
            <SearchButton />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

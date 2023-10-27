import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import { SearchButton } from "~/components/Icons";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
import useDebounce from "~/hooks/useDebounce";
import axios from "axios";
import * as searchService from "~/apiServices/searchService";
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);
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
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(e.target.value);
    }
  };
  const handleSubmit = () => {};
  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        onClickOutside={handleHideResult}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PoperWrapper>
              <h4 className={cx("search-title")}>Acounts</h4>
              {searchResult.map((result) => (
                <AcountItem key={result.id} data={result} />
              ))}
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchButton />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

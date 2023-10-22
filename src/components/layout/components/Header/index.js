import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthEurope,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Menu from "~/components/Popper/Menu";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { UploadIcon } from "~/components/Icons";
import Image from "../Image";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthEurope}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "Vi",
          title: "Viet Nam",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyboard shortcut",
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
    title: "View Profile",
    to: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>,
    title: "Get coins",
    to: "/coins",
  },
  {
    icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
    title: "Settings",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
    title: "Log out",
    to: "/",
    separate: true,
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "Language":
        break;
      default:
        break;
    }
  };
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                alt="Dao le phuong hoa"
                fallback="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1697997600&x-signature=kcVWLOCrKA9WsUUacSwIxhJR8JM%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

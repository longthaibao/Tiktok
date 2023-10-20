import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };
  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom-end"
      interactive={true}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PoperWrapper className={cx("menu-popper")}>
            {renderItems()}
          </PoperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

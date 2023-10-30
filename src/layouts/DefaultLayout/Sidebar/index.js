import Menu from "./Menu/Menu";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import configs from "~/configs";
import { MenuItem } from "./Menu";
import { HomeIcon, LiveIcon, GroupUserIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For you"
          to={configs.routes.home}
          icon={<HomeIcon />}
        />
        <MenuItem
          title="Following"
          to={configs.routes.following}
          icon={<GroupUserIcon />}
        />
        <MenuItem title="Live" to={configs.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;

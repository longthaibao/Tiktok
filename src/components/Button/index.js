import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Button({ to, href, onClick, children }) {
  let Comp = "button";
  let classes = cx("wrapper");
  return (
    <Comp classNames={classes}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;

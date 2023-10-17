import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  icon,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  let props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] == "function") {
        delete props[key];
      }
    });
  }
  let classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    [className]: className,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx("_icon")}>{icon}</span>}
      {<span className={cx("title")}>{children}</span>}
    </Comp>
  );
}

export default Button;

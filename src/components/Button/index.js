import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;

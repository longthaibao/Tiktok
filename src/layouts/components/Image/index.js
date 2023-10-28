import { forwardRef, useState } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";
import PropTypes from "prop-types";
const Image = forwardRef(
  (
    {
      fallback: customFallBack = images.noImage,
      className,
      src,
      alt,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");
    const handleError = () => {
      setFallBack(customFallBack);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack ? fallBack : src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);
Image.propTypes = {
  fallback: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;

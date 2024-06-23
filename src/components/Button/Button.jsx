import React from "react";
import classNames from "classnames";

export function Button({ variant, size, children, ...props }) {
  const classes = classNames(
    "btn",
    {
      "btn-outline": variant === "outline",
      "btn-icon": size === "icon",
    },
    props.className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

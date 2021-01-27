import React from "react";

import classes from "./VisibleArrowRight.module.css";

const arrowRight = (props) => (
  <svg viewBox="0 0 10 10" height="10px" className={props.visible ? classes.Visible : classes.Hidden}>
    <path
      d="M5 1 L8 5 L5 9"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      className={classes.Arrow}
    ></path>
    <path
      d="M0 5 L8 5"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      className={classes.Line}
    ></path>
  </svg>
);

export default arrowRight;

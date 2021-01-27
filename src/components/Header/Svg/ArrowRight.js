import React from "react";

import classes from "./ArrowRight.module.css";

const arrowRight = () => (
  <svg viewBox="0 0 10 10" height="10px">
    <path
  d="M5 1 L8 5 L5 9"      fill="none"
      stroke="#0a2540"
      strokeWidth="2"
      className={classes.Arrow}
    ></path>
    <path
      d="M0 5 L8 5"
      fill="none"
      stroke="#0a2540"
      strokeWidth="2"
      className={classes.Line}
    ></path>
  </svg>
);

export default arrowRight;

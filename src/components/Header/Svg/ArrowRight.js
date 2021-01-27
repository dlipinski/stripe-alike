import React from "react";

import classes from "./ArrowRight.module.css";

const arrowRight = () => (
  <svg viewBox="0 0 10 10" height="10px">
    <path
      d="M5 1.5 L8 5 L5 8.5"
      fill="none"
      stroke="#000"
      strokeWidth="1.5"
      className={classes.Arrow}
    ></path>
    <path
      d="M1.5 5 L8 5"
      fill="none"
      stroke="#000"
      strokeWidth="1.5"
      className={classes.Line}
    ></path>
  </svg>
);

export default arrowRight;

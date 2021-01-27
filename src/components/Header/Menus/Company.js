import React from 'react';

import classes from './Products.module.css';

const Company = props => (
  <div ref={props.setRef} className={classes.Developers}>
    Company
  </div>
)

export default Company;
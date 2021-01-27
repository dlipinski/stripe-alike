import React, {useState} from 'react';

import VisibleArrowRight from '../Header/Svg/VisibleArrowRight';
import classes from './Button.module.css';

const Button = props => {
  const [hover, setHover] = useState(false);
  const buttonClasses = [classes.Button];

  switch (props.type) {
    case 'light':
      buttonClasses.push(classes.Light);
      break;
    case 'transparent':
      buttonClasses.push(classes.Transparent);
    default:
      buttonClasses.push(classes.Default);
  }

  return (
    <div className={buttonClasses.join(" ")} onMouseOver={() => setHover(true)} onMouseLeave={() =>setHover(false)}>
      <span>{props.children}</span><VisibleArrowRight visible={hover} color={props.type !== 'transparent' ? '#fff' : '#0a2540'}/>
    </div>
  )
}

export default Button;
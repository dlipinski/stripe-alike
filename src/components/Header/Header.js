import React, { useRef } from "react";

import Products from "./Menus/Products";
import classes from "./Header.module.css";

const Header = () => {
  const productsRef = useRef();
  const useCasesRef = useRef();
  const developersRef = useRef();
  const companyRef = useRef();
  const arrowRef = useRef();

  const setArrowLeft = (navElRef) => {
    const navEl = navElRef.current;
    const { left, width } = navEl.getBoundingClientRect();
    console.log(left, width);
    const arrowEl = arrowRef.current;
    arrowEl.style.left = left + width / 3.1 + "px";
  };

  return (
    <React.Fragment>
      <header className={classes.Header}>
        <div className={classes.Logo}>stripe</div>
        <nav className={classes.Nav}>
          <div ref={productsRef} onMouseOver={() => setArrowLeft(productsRef)}>
            Products
          </div>
          <div ref={useCasesRef} onMouseOver={() => setArrowLeft(useCasesRef)}>
            Use cases
          </div>
          <div
            ref={developersRef}
            onMouseOver={() => setArrowLeft(developersRef)}
          >
            Developers
          </div>
          <div ref={companyRef} onMouseOver={() => setArrowLeft(companyRef)}>
            Company
          </div>
          <div>Pricing</div>
        </nav>
        <div className={classes.Button}>Sign in</div>
      </header>
      <div className={classes.MenuContainer}>
        <div className={classes.ArrowUp} ref={arrowRef}></div>
        <div className={classes.Menu}>
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

import React, { useEffect, useRef, useState } from 'react';

import Products from './Menus/Products';
import UseCases from './Menus/UseCases';
import Developers from './Menus/Developers';
import Button from '../Button/Button';
import classes from './Header.module.css';


const initialData = {
  products: {
    className: classes.Dissapear,
    component: Products,
    headerRef: null,
    menuRef: null
  },
  useCases: {
    className: classes.Dissapear,
    component: UseCases,
    headerRef: null,
    menuRef: null
  },
  developers: {
    className: classes.Dissapear,
    component: Developers,
    headerRef: null,
    menuRef: null
  },
  company: {
    className: classes.Dissapear,
    component: UseCases,
    headerRef: null,
    menuRef: null
  }
}

const Header = () => {
	const productsRef = useRef();
	const productsItemRef = useRef();
	const useCasesRef = useRef();
	const useCasesItemRef = useRef();
	const developersRef = useRef();
	const developersItemRef = useRef();
	const companyRef = useRef();
	const companyItemRef = useRef();
	const arrowRef = useRef();
	const menuRef = useRef();
  const [currentTab, setCurrentTab] = useState();
  const [menuVisible, setMenuVisible] = useState();

	const setArrowLeft = navElRef => {
		const navEl = navElRef.current;
		const { left, width } = navEl.getBoundingClientRect();
		const arrowEl = arrowRef.current;
		arrowEl.style.left = left + width / 3 + 'px';
	};

	const handleMouseOver = (navElRef, n) => {
    setMenuVisible(true);
    setTimeout(() => {
    setArrowLeft(navElRef);
    setCurrentTab(n);
    }, 100);
  };
  
  const handleMouseLeave = e => {
   const toElement = e.toElement || e.relatedTarget;
   if (!toElement.classList || toElement.classList.contains(classes.Header)) {
     setMenuVisible(false);
   }
  }

  const handleMenuMouseLeave = e => {
    setMenuVisible(false);
  }

	const setMenuSize = menuItemRef => {
		const menuItemEl = menuItemRef.current;
		const { width, height } = menuItemEl.getBoundingClientRect();
		const menuEl = menuRef.current;
		menuEl.style.width = width + 'px';
		menuEl.style.height = height + 'px';
	};

	let productsCn = classes.Dissapear;
	let useCasesCn = classes.Dissapear;
	let developersCn =classes.Dissapear;
	let companyCn =classes.Dissapear;

	switch (currentTab) {
		case 1:
			setMenuSize(productsItemRef);
			productsCn = classes.Appear;
			break;
		case 2:
			setMenuSize(useCasesItemRef);
			useCasesCn = classes.Appear
			break;
		case 3:
			setMenuSize(developersItemRef);
			developersCn = classes.Appear;
			break;
		case 4:
			setMenuSize(companyItemRef);
			companyCn = classes.Appear;
      break;
		default:
			break;
	}

	return (
		<React.Fragment>
			<div className={classes.TopBackground}></div>
			<div className={classes.BackgroundLinesContainer}>
				<div className={classes.BackgroundLines}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<header className={classes.Header}>
				<div className={classes.Logo}>stripe</div>
				<nav className={classes.Nav} onMouseLeave={handleMouseLeave}>
					<div ref={productsRef} onMouseOver={() => handleMouseOver(productsRef, 1)}>
						Products
					</div>
					<div ref={useCasesRef} onMouseOver={() => handleMouseOver(useCasesRef, 2)}>
						Use cases
					</div>
					<div ref={developersRef} onMouseOver={() => handleMouseOver(developersRef, 3)}>
						Developers
					</div>
					<div ref={companyRef} onMouseOver={() => handleMouseOver(companyRef, 4)}>
						Company
					</div>
					<div>Pricing</div>
				</nav>
				<Button type='light'>Sign in</Button>
			</header>
			<div className={[classes.MenuContainer, menuVisible ? classes.Visible : classes.Hidden].join(' ')}>
				<div className={classes.ArrowUp} ref={arrowRef}></div>
				<div className={classes.Menu} ref={menuRef} onMouseLeave={handleMenuMouseLeave}>
					<div className={productsCn}>
						<Products setRef={productsItemRef} />
					</div>
					<div className={useCasesCn}>
						<UseCases setRef={useCasesItemRef} />
					</div>
					<div className={developersCn}>
						<Developers setRef={developersItemRef} />
					</div>
					<div className={companyCn}>
						<UseCases setRef={companyItemRef} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;

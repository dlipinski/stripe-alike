import React from 'react';

import classes from './Body.module.css';
import Button from '../Button/Button';

const Body = props => {
	return (
		<div className={classes.Body}>
			<div className={classes.Section1}>
				<div className={classes.Left}>
					<h1>
						Payments
						<br />
						infrastructure
						<br />
						for the internet
					</h1>
					<div>
						Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s
						software and APIs to accept payments, send payouts, and manage their businesses online.
					</div>
          <div className={classes.Buttons}>
          <Button>Start now</Button>
          <Button type='transparent'>Contact sales</Button>
        </div>
				</div>
        
				<div className={classes.Right}>
					<div className={classes.SomeRectangle}>
            <div>
              Rocket Rides
            </div>
            <div className={classes.Placeholders}>
              <div>Search</div>
              <div></div>
              <div></div>
            </div>
          </div>
					<div className={classes.SomeOtherRectangle}></div>
				</div>
			</div>
		</div>
	);
};

export default Body;

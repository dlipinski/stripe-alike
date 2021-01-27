import React from 'react';

import ArrowRight from '../Svg/ArrowRight';
import classes from './Products.module.css';

const data = [
	{ title: 'SaaS', description: 'Manage recurring billing and subscriptions' },
	{ title: 'Marketplaces', description: 'Pay out globally and facilitate multi-party payments' },
	{ title: 'Platforms', description: 'Let customers accept payments within your platform' },
];

const UseCases = props => (
	<div className={classes.UseCases} ref={props.setRef}>
		{data.map(d => (
			<div className={classes.Item}>
				<div className={classes.Left}>
					<div className={classes.SmallIcon}></div>
				</div>
				<div className={classes.Right}>
					<div className={classes.ItemTitle}>
						{d.title}
						<ArrowRight />
					</div>
					<div className={classes.ItemSubTitle}>{d.description}</div>
				</div>
			</div>
		))}
	</div>
);

export default UseCases;

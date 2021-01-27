import React from 'react';

import ArrowRight from '../Svg/ArrowRight';
import classes from './Products.module.css';

const data = [
	{
		title: 'Payments',
		items: [
			{ title: 'Payments', description: 'Online payments' },
			{ title: 'Terminal', description: 'In-person payments' },
			{ title: 'Connect', description: 'Payments for platforms' },
			{ title: 'Billing', description: 'Subscriptions & invoicing' },
		],
	},
	{
		title: 'Financial services',
		items: [{ title: 'Issuing', description: 'Card creation' }],
	},
	{
		title: 'Business operations',
		items: [
			{ title: 'Radar', description: 'Fraud & risk managment' },
			{ title: 'Sigma', description: 'Custom reports' },
			{ title: 'Atlas', description: 'Startup incorporation' },
			{ title: 'Climate', description: 'Carbon removal' },
		],
	},
];

const Products = props => (
	<div className={classes.Products} ref={props.setRef}>
		{data.map((d, di) => (
			<div>
				<div className={classes.Title}>{d.title}</div>
				<div className={classes.List}>
					{d.items.map((i, ii) => (
						<div className={classes.Item}>
							<div className={classes.Left}>
								<div className={classes.BigIcon} style={{background: colors[di * 4 + ii]}}></div>
							</div>
							<div className={classes.Right}>
								<div className={classes.ItemTitle}>
									{i.title} <ArrowRight />
								</div>
								<div className={classes.ItemSubTitle}>{i.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		))}
	</div>
);

export default Products;

const colors = [
'#0074D9',
'#7FDBFF',
'#39CCCC',
'#3D9970',
'#2ECC40',
'#01FF70',
'#FFDC00',
'#FF851B',
'#FF4136',
'#85144b',
'#F012BE',
'#B10DC9',
]
import React from 'react';

import ArrowRight from '../Svg/ArrowRight';
import classes from './Products.module.css';

const Developers = props => (
	<div ref={props.setRef} className={classes.Developers}>
		<div className={classes.Item}>
			<div className={classes.Left}>
				<div className={classes.SmallIcon}></div>
			</div>
			<div className={classes.Right}>
				<div className={classes.ItemTitle}>
					Documentation
					<ArrowRight />
				</div>
				<div className={classes.ItemSubTitle}>Start integrating Stripe’s products and tools</div>
			</div>
		</div>

		<div className={classes.TwoColumns} style={{ paddingTop: '2rem', paddingBottom: '0rem' }}>
			<div>
				<div className={classes.Item}>
					<div className={classes.Title} style={{ paddingBottom: 0 }}>
						Get started
					</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Prebuilt checkout</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Libraries and SDKs</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Plugins</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Code samples</div>
				</div>
			</div>
			<div>
				<div className={classes.Item}>
					<div className={classes.Title} style={{ paddingBottom: 0 }}>
						Guides
					</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Prebuilt checkout</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Libraries and SDKs</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Plugins</div>
				</div>
				<div className={classes.Item} style={{ paddingBottom: 0 }}>
					<div className={classes.ItemSubTitle}>Code samples</div>
				</div>
			</div>
		</div>

		<div className={classes.Bottom}>
				<div className={classes.TwoColumns}>
					<div>
						<div className={classes.Item} style={{ paddingBottom: '1rem' }}>
							<div className={classes.Left}>
								<div className={classes.SmallIcon}></div>
							</div>
							<div className={classes.Right}>
								<div className={classes.ItemTitle}>
									Full API reference
									<ArrowRight />
								</div>
							</div>
						</div>

						<div className={classes.Item} style={{ paddingBottom: 0 }}>
							<div className={classes.Left}>
								<div className={classes.SmallIcon}></div>
							</div>
							<div className={classes.Right}>
								<div className={classes.ItemTitle}>
									Support
									<ArrowRight />
								</div>
							</div>
						</div>
					</div>
					<div>
							<div className={classes.Item} style={{ paddingBottom: '1rem' }}>
								<div className={classes.Left}>
									<div className={classes.SmallIcon}></div>
								</div>
								<div className={classes.Right}>
									<div className={classes.ItemTitle}>
										Api Status
										<ArrowRight />
									</div>
								</div>
							</div>
							<div className={classes.Item} style={{ paddingBottom: 0 }}>
								<div className={classes.Left}>
									<div className={classes.SmallIcon}></div>
								</div>
								<div className={classes.Right}>
									<div className={classes.ItemTitle}>
										Api changelog
										<ArrowRight />
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
	</div>
);

export default Developers;

import React from "react";

import ArrowRight from "../Svg/ArrowRight";
import classes from "./Products.module.css";

const data = [
  {
    title: "Payments",
    items: [
      { title: "Payments", description: "Online payments" },
      { title: "Terminal", description: "In-person payments" },
      { title: "Connect", description: "Payments for platforms" },
      { title: "Billing", description: "Subscriptions & invoicing" },
    ],
  },
  {
    title: "Financial services",
    items: [{ title: "Issuing", description: "Card creation" }],
  },
  {
    title: "Business operations",
    items: [
      { title: "Radar", description: "Fraud & risk managment" },
      { title: "Sigma", description: "Custom reports" },
      { title: "Atlas", description: "Startup incorporation" },
      { title: "Climate", description: "Carbon removal" },
    ],
  },
];

const products = () => (
  <div className={classes.Products}>
    {data.map((d) => (
      <div>
        <div className={classes.Title}>{d.title}</div>
        <div className={classes.List}>
          {d.items.map((i) => (
            <div className={classes.Item}>
              <div className={classes.ItemTitle}>
                {i.title} <ArrowRight />
              </div>
              <div className={classes.ItemSubTitle}>{i.description}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default products;

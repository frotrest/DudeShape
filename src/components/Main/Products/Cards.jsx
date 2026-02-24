import { Component } from "react";
import styles from "./products.module.css";
import clsx from "clsx";
import Card from "./Card";
import pumpleBottle from "@assets/img/pump-bottle.png";
import jar from "@assets/img/jar.png";

const imgs = [
  {
    img: pumpleBottle,
    alt: "pumple-bottle",
  },
  {
    img: jar,
    alt: "jar",
  },
];

export default class Cards extends Component {
  render() {
    return (
      <div className={clsx(styles.cards)} data-animate="fadeInUp">
        {imgs.map((item, index) => (
          <Card key={index} cardImg={item.img} cardAlt={item.alt} />
        ))}
      </div>
    );
  }
}

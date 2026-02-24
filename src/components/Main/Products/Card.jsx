import { Component } from "react";
import styles from "./products.module.css";
import clsx from "clsx";

export default class Card extends Component {
  render() {
    return (
      <div className={clsx(styles.card)}>
        <img
          src={this.props.cardImg}
          alt={this.props.cardAlt}
          className={clsx(styles.cardImg)}
        />
        <div className={clsx(styles.cardContent)}>
          <h2 className={clsx(styles.cardTitle)}>Cosmetic products</h2>
          <p className={clsx(styles.cardItem)}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <div className={clsx(styles.cardAdditional)}>
            <div className={clsx(styles.cardBtns)}>
              <button className={clsx(styles.cardBtn)}>Buy Now</button>
              <button className={clsx(styles.cardBtn)}>Add To Cart</button>
            </div>
            <h3 className={clsx(styles.cardAdditionalPrice)}>$120</h3>
          </div>
        </div>
      </div>
    );
  }
}

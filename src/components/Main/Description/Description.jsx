import { Component } from "react";
import styles from "./description.module.css";
import clsx from "clsx";
import Container from "../../Container";

export default class Description extends Component {
  render() {
    return (
      <section className={clsx(styles.description)}>
        <Container
          className={clsx(styles.descriptionContent)}
          dataAnimate="fadeInLeft"
        >
          <div className={clsx(styles.description)}>
            <h2 className={clsx(styles.descriptionTitle)}>100%</h2>
            <p className={clsx(styles.descriptionItem)}>Organic Products</p>
          </div>
          <div className={clsx(styles.description)}>
            <h2 className={clsx(styles.descriptionTitle)}>2M+</h2>
            <p className={clsx(styles.descriptionItem)}>Yearly Sales</p>
          </div>
          <div className={clsx(styles.description)}>
            <h2 className={clsx(styles.descriptionTitle)}>1.9M+</h2>
            <p className={clsx(styles.descriptionItem)}>Happy Customers</p>
          </div>
        </Container>
      </section>
    );
  }
}

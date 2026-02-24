import { Component } from "react";
import styles from "./advantages.module.css";
import clsx from "clsx";
import Container from "../../Container";
import exampleImg from "@assets/img/example-bottle.png";

export default class Advantages extends Component {
  render() {
    return (
      <section className={clsx(styles.advantages)}>
        <Container className={clsx(styles.advantagesContent)}>
          <div
            className={clsx(styles.advantagesContentText)}
            data-animate="fadeInLeft"
          >
            <h2 className={clsx(styles.advantagesContentTextTitle)}>
              The Perfect Beauty Of You
            </h2>
            <p className={clsx(styles.advantagesContentTextItem)}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className={clsx(styles.advantagesContentTextItem)}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className={clsx(styles.advantagesContentTextBtn)}>
              Shop Now
            </button>
          </div>
          <img
            src={exampleImg}
            alt="exampleBottle"
            data-animate="fadeInRight"
          />
        </Container>
      </section>
    );
  }
}

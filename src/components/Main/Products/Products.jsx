import { Component } from "react";
import styles from "./products.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from "./Cards";

export default class Products extends Component {
  render() {
    return (
      <section className={clsx(styles.products)}>
        <Container className={clsx(styles.productsContent)}>
          <div className={clsx(styles.productsContentText)}>
            <div
              className={clsx(styles.productsContentTextBlock)}
              data-animate="fadeInLeft"
            >
              <h2 className={clsx(styles.productsContentTextBlockTitle)}>
                Our Porular Product
              </h2>
              <p className={clsx(styles.productsContentTextBlockItem)}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <a
              href="#"
              className={clsx(styles.productsContentTextLink)}
              data-animate="fadeInRight"
            >
              Discover Our Products <FaLongArrowAltRight />
            </a>
          </div>
          <Cards />
        </Container>
      </section>
    );
  }
}

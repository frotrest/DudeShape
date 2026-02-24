import { Component } from "react";
import styles from "./customer.module.css";
import clsx from "clsx";
import Container from "../../Container";
import customer from "@assets/img/customer.png";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default class Customer extends Component {
  render() {
    return (
      <section className={clsx(styles.customer)}>
        <Container className={clsx(styles.customerContent)}>
          <img src={customer} alt="customer" data-animate="fadeInLeft" />
          <div
            className={clsx(styles.customerContentText)}
            data-animate="fadeInRight"
          >
            <h2 className={clsx(styles.customerContentTextTitle)}>
              The Perfect Beauty Of You
            </h2>
            <div className={clsx(styles.stars)}>
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} color="rgba(255, 192, 70, 1)" size={20} />
              ))}
            </div>
            <p className={clsx(styles.customerContentTextItem)}>
              <RiDoubleQuotesL color="#6FB587" /> Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. <RiDoubleQuotesR color="#6FB587" />
            </p>
            <div className={clsx(styles.customerContentInfo)}>
              <h5 className={clsx(styles.customerContentInfoTitle)}>
                Rusmin Islam
              </h5>
              <h5 className={clsx(styles.customerContentInfoJob)}>Designer</h5>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

import { Component } from "react";
import styles from "./partners.module.css";
import clsx from "clsx";
import Container from "../../Container";
import { FaAirbnb, FaHubspot, FaGoogle, FaFedex } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { SiWalmart } from "react-icons/si";

export default class Partners extends Component {
  render() {
    return (
      <section className={clsx(styles.partners)}>
        <Container
          className={clsx(styles.partnersContent)}
          dataAnimate="fadeInUp"
        >
          <FaAirbnb size={50} color="rgba(85, 85, 85, 1)" />
          <FaHubspot size={50} color="rgba(85, 85, 85, 1)" />
          <FaGoogle size={50} color="rgba(85, 85, 85, 1)" />
          <TfiMicrosoftAlt size={50} color="rgba(85, 85, 85, 1)" />
          <SiWalmart size={150} color="rgba(85, 85, 85, 1)" />
          <FaFedex size={100} color="rgba(85, 85, 85, 1)" />
        </Container>
      </section>
    );
  }
}

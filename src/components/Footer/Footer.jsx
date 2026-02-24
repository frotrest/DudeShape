import { Component } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import Container from "../Container";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default class Footer extends Component {
  render() {
    return (
      <footer className={clsx(styles.footer)}>
        <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
          <FooterTop />
          <FooterBottom />
        </Container>
      </footer>
    );
  }
}

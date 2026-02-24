import { Component } from "react";
import styles from "./topheader.module.css";
import clsx from "clsx";
import Container from "../../../Container";
import { FaRegUser, FaCartArrowDown } from "react-icons/fa";
import { MdLineStyle } from "react-icons/md";

export default class TopHeader extends Component {
  render() {
    return (
      <section className={clsx(styles.headerTop)}>
        <Container className={clsx(styles.headerTopContent)}>
          <h2 className={clsx(styles.headerTopContentTitle)}>Dudeshape</h2>
          <nav className={clsx(styles.navBar)}>
            <a href="#" className={clsx(styles.navBarItem)}>
              Home
            </a>
            <a href="#" className={clsx(styles.navBarItem)}>
              Products
            </a>
            <a href="#" className={clsx(styles.navBarItem)}>
              About Us
            </a>
            <a href="#" className={clsx(styles.navBarItem)}>
              Contact Us
            </a>
          </nav>
          <div className={clsx(styles.socialLinks)}>
            <div className={clsx(styles.socialLink)}>
              <FaRegUser size={25} style={{ cursor: "pointer" }} />
            </div>
            <div className={clsx(styles.socialLink)}>
              <FaCartArrowDown size={25} style={{ cursor: "pointer" }} />
            </div>
            <div className={clsx(styles.socialLink)}>
              <MdLineStyle size={25} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

import { Component } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import Container from "../Container";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaInstagram  } from "react-icons/fa";


export default class FooterBottom extends Component {
  render() {
    return (
      <section className={clsx(styles.footerBottom)}>
        <Container className={clsx(styles.footerBottomContent)}>
          <div className={clsx(styles.infoBlock)}>
            <h2 className={clsx(styles.infoBlockLogo)}>Dudeshape</h2>
            <p className={clsx(styles.infoBlockItem)}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className={clsx(styles.infoBlock)}>
            <h2 className={clsx(styles.infoBlockTitle)}>Quick Link</h2>
            <ul className={clsx(styles.infoList)}>
              <li className={clsx(styles.infoListItem)}>Home</li>
              <li className={clsx(styles.infoListItem)}>Products</li>
              <li className={clsx(styles.infoListItem)}>About Us</li>
            </ul>
          </div>
          <div className={clsx(styles.infoBlock)}>
            <h2 className={clsx(styles.infoBlockTitle)}>Contact Us</h2>
            <div className={clsx(styles.infoList)}>
              <a
                href="mailto:oyasimnaeem@gmail.com"
                className={clsx(styles.infoListItem)}
              >
                oyasimnaeem@gmail.com
              </a>
              <a href="tel:+123456789" className={clsx(styles.infoListItem)}>
                +123456789
              </a>
            </div>
            <div className={clsx(styles.infoSocials)}>
                <ImFacebook />
                <FaTwitter />
                <FaInstagram />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

import { Component } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import TopHeader from "./Header-components/TopHeader/TopHeader";
import BottomHeader from "./Header-components/BottomHeader/BottomHeader";

export default class Header extends Component {
  render() {
    return (
      <header className={clsx(styles.header)} data-animate="fadeIn">
        <TopHeader />
        <BottomHeader />
      </header>
    );
  }
}

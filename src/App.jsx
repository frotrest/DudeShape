import { Component } from "react";
import Header from "./components/Header/Header";
import MainBlock from "./components/Main/MainBlock";
import Footer from "./components/Footer/Footer";
import AnimateWatcher from "./components/AnimateWatcher";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainBlock />
        <Footer />
        <AnimateWatcher />
      </>
    );
  }
}

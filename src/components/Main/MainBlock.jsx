import { Component } from "react";
import Partners from "./Partners/Partners";
import Products from "./Products/Products";
import Description from "./Description/Description";
import Advantages from "./Advantages/Advantages";
import Customer from "./Customer/Customer";

export default class MainBlock extends Component {
  render() {
    return (
      <main className="main">
        <Partners />
        <Products />
        <Description />
        <Advantages />
        <Customer />
      </main>
    );
  }
}

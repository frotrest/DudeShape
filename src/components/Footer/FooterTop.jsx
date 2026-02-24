import { Component } from "react";
import styles from "./footer.module.css";
import clsx from "clsx";
import Container from "../Container";

export default class FooterTop extends Component {
  state = {
    email: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.email.trim()) {
      alert("there is nothing here, please type something");
    } else {
      console.log(`Your email: ${this.state.email}`);
      this.setState({ email: "" });
    }
  };
  render() {
    return (
      <section className={clsx(styles.footerTop)}>
        <Container className={clsx(styles.footerTopContent)}>
          <h2 className={clsx(styles.footerTopContentTitle)}>
            Subscribe to Get Our Letest News
          </h2>
          <form onSubmit={this.handleSubmit} className={clsx(styles.emailForm)}>
            <label className={clsx(styles.emailFormLabel)}>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                className={clsx(styles.emailFormLabelInput)}
                placeholder="Enter email"
              />
              <button type="submit" className={clsx(styles.emailFormBtn)}>
                Subscribe
              </button>
            </label>
          </form>
        </Container>
      </section>
    );
  }
}

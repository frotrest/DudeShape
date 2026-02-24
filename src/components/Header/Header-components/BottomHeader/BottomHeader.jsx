import { Component } from "react";
import styles from "./bottomheader.module.css";
import clsx from "clsx";
import Container from "../../../Container";
import { nanoid } from "nanoid";
import { IoIosSearch } from "react-icons/io";

export default class BottomHeader extends Component {
  state = {
    search: "",
  };
  randomId = nanoid();
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.search.trim()) {
      alert("there is nothing here, please type something");
    } else {
      console.log(`Your data: ${this.state.search}`);
      this.setState({ search: "" });
    }
  };
  render() {
    return (
      <section className={clsx(styles.bottomHeader)}>
        <Container className={clsx(styles.bottomHeaderContent)}>
          <div className={clsx(styles.bottomHeaderContentText)}>
            <h1 className={clsx(styles.bottomHeaderContentTextTitle)}>
              Get Your Best Cosmetic Products Here
            </h1>
            <p className={clsx(styles.bottomHeaderContentTextItem)}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <form
              onSubmit={this.handleSubmit}
              className={clsx(styles.searchForm)}
            >
              <label
                htmlFor={this.randomId}
                className={clsx(styles.searchLabel)}
              >
                <input
                  type="text"
                  name="search"
                  value={this.state.search}
                  onChange={this.handleChange}
                  id={this.randomId}
                  className={clsx(styles.searchLabelItem)}
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className={clsx(styles.searchLabelItemImg)}
                >
                  <IoIosSearch size={20} color="white" />
                </button>
              </label>
            </form>
            <button className={clsx(styles.searchFormBtn)}>Shop Now</button>
          </div>
        </Container>
      </section>
    );
  }
}

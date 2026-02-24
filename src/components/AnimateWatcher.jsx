import { Component } from "react";

export default class AnimateWatcher extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll("[data-animate]");

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const type = entry.target.dataset.animate;
            entry.target.classList.add("animate__animated", `animate__${type}`);
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => this.observer.observe(el));
  }
  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return null;
  }
}

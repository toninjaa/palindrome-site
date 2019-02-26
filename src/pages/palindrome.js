import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Palindrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ""};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value.toLowerCase()});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === this.state.value.split("").reverse().join("")) {
      alert(`${this.state.value} is a palindrome!`);
    } else {
      alert(`Sorry, no palindromes this time.`);
    }
  }

  render() {
    return (
      <Layout>
      <SEO />

      <h3>Enter your text to put it to the palindrome test:</h3>
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleInputChange} />
          <button type="submit">Palindrome?</button>
        </form>
      </div>
      <div style={{ position: `absolute`, bottom: `1.5rem`, left: `1rem`, }}>
        <Link to="/">Home</Link>
      </div>
    </Layout>
    );
  }
}

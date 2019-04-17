import React from "react";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  fetchApi = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(result => result.json())
      .then(data => {
        let randomIndex = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: randomIndex.quote,
          author: randomIndex.character
        });
      });
  };

  componentDidMount() {
    this.fetchApi();
  }

  handleClick = e => {
    event.preventDefault();
    this.fetchApi();
  };

  render() {
    return (
      <div className="QuoteBox">
        <p>Quote - {this.state.quote}</p>
        <p>Author - {this.state.author}</p>
        <button onClick={this.handleClick}>New Quote</button>
      </div>
    );
  }
}

export default QuoteBox;

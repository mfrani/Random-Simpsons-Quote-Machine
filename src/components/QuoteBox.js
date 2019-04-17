import React from "react";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(result => result.json())
      .then(data => {
        let randomIndex = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: randomIndex.quote,
          author: randomIndex.character
        });
      });
  }

  render() {
    return (
      <div className="QuoteBox">
        <p>Quote - {this.state.quote}</p>
        <p>Author - {this.state.author}</p>
      </div>
    );
  }
}

export default QuoteBox;

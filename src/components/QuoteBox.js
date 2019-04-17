import React from "react";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      image: ""
    };
  }

  fetchApi = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=15")
      .then(result => result.json())
      .then(data => {
        let randomIndex = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: randomIndex.quote,
          author: randomIndex.character,
          image: randomIndex.image
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
      <div className="container">
        <div className="QuoteBox">
          <button onClick={this.handleClick}>New Quote</button>
          <p>Quote - "{this.state.quote}"</p>
          <p>Author - {this.state.author}</p>

          <img src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default QuoteBox;

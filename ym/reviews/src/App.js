import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {reviews: []}

  componentDidMount() {
    fetch('/data')
      .then(res => res.json())
      .then(data => this.setState({ data }))
      //.then(state => console.log(this.state.data))

    

  }

  render() {
    return (
      <div className="App">
        <h1>Статистика по отзывам на Яндекс Маркет</h1>

        <div></div>
      </div>
    );
  }
}

export default App;

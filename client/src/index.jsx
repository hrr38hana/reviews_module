import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 1,
      reviews: [],
    }
  }
  componentDidMount() {
    console.log('mounted')
    // $.get('/')
  }
  render() {
    return (
      <h1>rendering</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
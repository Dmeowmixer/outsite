import React, { Component } from 'react';

class Locations extends Component {
  state = {
    locations: [],
    data: []
  }
  // Retrieve locations JSON through API
  fetchLocations = () => {
    fetch('/locations')
      .then(res => res.json())
      .then(data => this.setState({data}));
  }
  componentDidMount(){
    this.fetchLocations();
  }
  render() {
    return(
      <div className="locations">
        <h1>Locations</h1>

        <p>Hello World</p>
      </div>
    );
  }
}
export default Locations
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
      .then(locations => this.setState({locations}));
  }
  componentDidMount(){
    this.fetchLocations();
  }
  render() {
    console.log(this.state.locations);
    return(
      <div className="locations">
        <h1>Locations</h1>

        <p>Hello World</p>
      </div>
    );
  }
}
export default Locations
import React, { Component } from 'react';
import queryString from 'query-string';

class LocationDetails extends Component {
  state = {
    location: {},
    startDate: '',
    endDate: ''
  }

  componentDidMount(){
    const { state } = this.props.location;
    if(state && state.location){
      return this.setState(state)
    }
    const { locationName } = this.props.match.params;
    const { startDate, endDate } = queryString.parse(this.props.location.search);
    // fetch()
    this.setState({startDate: new Date(startDate), endDate: new Date(endDate)})
    console.log({locationName, startDate, endDate});
  }

  render(){
    // console.log(this.state);
    return(
      <div>
        <h1>locationDetails: {this.state.location.name}</h1>
      </div>
    )
  }
}
export default LocationDetails;
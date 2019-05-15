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
  }

  render(){
    const dateRange = queryString.parse(this.props.location.search)
    return(
      <div>
          <h4>You have selected </h4>
          <p>From: {dateRange.startDate} To: {dateRange.endDate}</p>
          <h1>Location Details: </h1>
        <ul>
          <li> {this.state.location.name}</li>
          <li> {this.state.location.city}</li>
          <li> {this.state.location.country}</li>
          <li> {this.state.location.numberOfBeds}</li>
          <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in dolores praesentium eveniet iusto saepe. Libero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</li>
          <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in dolores praesentium eveniet iusto saepe. Libero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</li>
          <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in dolores praesentium eveniet iusto saepe. Libero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</li>
          <li><img src={this.state.location.image} alt=""/></li>
        </ul>
      </div>
    )
  }
}
export default LocationDetails;
import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

class Locations extends Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.queryAvailability = this.queryAvailability.bind(this);
  }
  state = {
    locations: [],
    startDate: [],
    endDate: [],
  }

  fetchLocations = () => {
    fetch('/locations')
      .then(res => res.json())
      .then(locations => {
        locations.filter(x => {
          return this.setState({locations});
        })
      })
  }

  componentDidMount(){
    this.fetchLocations();
  }

  handleSelect(range){
    this.setState({startDate: range.startDate._d});
    this.setState({endDate: range.endDate._d});
  }

  queryAvailability() {
    // console.log(this.state.startDate, this.state.endDate); Can be sent to API endpoint to query availability
    const foundObjects = this.state.locations.filter(locations => {
      return locations.available === true
    })
    if(foundObjects.length > 0) {
      this.setState({locations: foundObjects})
    }
  }

  render() {
    return(
      <div className="locations">
        <h3>Select your desired dates, and check available units</h3>
        <DateRange
          calendars="1"
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        />
        <button onClick={this.queryAvailability}>Check Availability</button>
        <h1>Locations</h1>
        {this.state.locations.map(location => {
          if(location.country === "US"){
            return(
              <li key={location.id} className="USA">{location.name}</li>
            )
          }else{
            return (
              <li key={location.id} className="international">{location.name}</li>
            )
          }
        })}
      </div>
    );
  }
}
export default Locations
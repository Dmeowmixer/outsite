import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

class Locations extends Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  state = {
    us:[],
    international: [],
    startDate: [],
    endDate: []
  }

  // Retrieve locations JSON through API
  fetchLocations = () => {
    fetch('/locations')
      .then(res => res.json())
      .then(locations => {
        const unitedStates = locations.filter(x => x.country === "US" );
        const international = locations.filter(x => x.country !== "US");
        this.setState({us: unitedStates});
        this.setState({international: international});
      })
      // .then(locations => this.setState({ locations }))
      // On fetch, map through or filter through the locations and insert them into international or us locations
  }

  componentDidMount(){
    this.fetchLocations();
  }

  handleSelect(range){
    this.setState({startDate: range.startDate});
    this.setState({endDate: range.endDate});
    // console.log(range.startDate);
    // console.log(range.endDate._d);
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
        <h1>Locations</h1>
        <h1>U.S.A</h1>
        {this.state.us.map(location => 
          <div key={location.id}>
            <ul>
              <li>{location.name}</li>
              <li>{location.city}</li>
              <li>{location.country}</li>
              <li>{location.numberOfBeds}</li>
            </ul>
          </div>
        )}
        <h1>International</h1>
        {this.state.international.map(location => 
          <div key={location.id}>
            <ul>
              <li>{location.name}</li>
              <li>{location.city}</li>
              <li>{location.country}</li>
              <li>{location.numberOfBeds}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
export default Locations
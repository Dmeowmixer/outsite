import React, { Component } from 'react';
import { Container, Col, Jumbotron } from 'reactstrap';
import './LocationDetails.css';

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
    const { startDate, endDate } = this.props.location.search;
    this.setState({startDate: new Date(startDate), endDate: new Date(endDate)})
  }

  render(){
    return(
      <Container>
        <Col>
          <h4>You have selected </h4>
          <p>From: {this.state.startDate.toString()} To: {this.state.endDate.toString()}</p>
          <Jumbotron>
            <h1> Welcome to {this.state.location.name}</h1>
            <h2> {this.state.location.city}, {this.state.location.country}</h2>
            <img className="locationImage" width="1000px" src={this.state.location.image} alt="Outsite Location"/>
            <div>
              <h2>Location Details: </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quisquam in dolores praesentium eveniet iusto saepe. pbero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quisquam in dolores praesentium eveniet iusto saepe. pbero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing ept. Quisquam in dolores praesentium eveniet iusto saepe. pbero quam, adipisci ipsam laboriosam quidem enim, odit possimus unde modi, itaque reiciendis! Accusantium, rerum.</p>
              <p> Number Of Beds: {this.state.location.numberOfBeds}</p>
            </div>
          </Jumbotron>
        </Col>
      </Container>
    )
  }
}
export default LocationDetails;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { Container, Row, Col, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Locations.css';

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
    targetLocation: []
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
    // Would be nice to hide checkAvailability button unless date ranges are selected (both start and enddate states are true)
    // console.log(this.state.startDate, this.state.endDate); Can be sent to API endpoint to query availability
    // Currently mimics successful API query by filtering for available.
    const foundObjects = this.state.locations.filter(locations => {
      return locations.available === true
    })
    if(foundObjects.length > 0) {
      this.setState({locations: foundObjects})
    }
  }

  render() {
    const { startDate,endDate } = this.state;
    return(
      <Container>
        <div className="locations">
          <h2>Select your desired stay duration</h2>
          <DateRange
            calendars="1"
            onInit={this.handleSelect}
            onChange={this.handleSelect}
          />
          <Button color="info" onClick={this.queryAvailability}>Show available locations</Button>
          <Row className="locationsWrapper">
            <Col>
              <div className="USA">
                <h4 className="locationCategory">U.S.A</h4>
                <Row>
                  {this.state.locations.map(location => {
                    if(location.country === "US"){
                      return(
                        <Col key={location.id} sm="6">
                          <Link 
                            key={location.id} 
                            to={{
                              pathname: `/locations/${location.name}?startDate=${startDate.toDateString()}&endDate=${endDate.toDateString()}`,
                              state: { location, startDate, endDate }
                             }}>
                             <Row>
                              <Card>
                                <Row>
                                  <Col sm="5">
                                    <CardImg src={location.image} alt="Card image cap" />
                                  </Col>
                                  <Col sm="7">
                                    <CardBody>
                                      <CardTitle>{location.city}</CardTitle>
                                      <CardSubtitle>{location.name}</CardSubtitle>
                                    </CardBody>
                                  </Col>
                                </Row>
                              </Card>
                             </Row>
                          </Link>
                        </Col>
                      )
                    }
                  })}
                </Row>
              </div>
            </Col>
            <Col>
              <div className="international">
                <h4 className="locationCategory">International</h4>
                <Row>
                  {this.state.locations.map(location => {
                    if(location.country !== "US"){
                      return(
                        <Col key={location.id} sm="6">
                          <Link 
                            key={location.id} 
                            to={{
                              pathname: `/locations/${location.name}?startDate=${startDate.toDateString()}&endDate=${endDate.toDateString()}`,
                              state: { location, startDate, endDate }
                             }}>
                             <Row>
                              <Card>
                                <Row>
                                  <Col sm="5">
                                    <CardImg src={location.image} alt="Card image cap" />
                                  </Col>
                                  <Col sm="7">
                                    <CardBody>
                                      <CardTitle>{location.city}</CardTitle>
                                      <CardSubtitle>{location.name}</CardSubtitle>
                                    </CardBody>
                                  </Col>
                                </Row>
                              </Card>
                             </Row>
                          </Link>
                        </Col>
                      )
                    }
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Locations
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
          <h3>Select your desired stay duration</h3>
          <DateRange
            calendars="1"
            onInit={this.handleSelect}
            onChange={this.handleSelect}
          />
          <button onClick={this.queryAvailability}>Show available locations</button>
          <h1>Locations</h1>
          <Row className="locationsWrapper">
            {this.state.locations.map(location => {
              if(location.country === "US"){
                return(
                  <Col sm="6">
                    <div key={location.id} className="USA">
                      <Link 
                        key={location.id} 
                        to={{
                          pathname: `/locations/${location.name}?startDate=${startDate.toDateString()}&endDate=${endDate.toDateString()}`,
                          state: { location, startDate, endDate }
                         }}>
                         <Col sm="6">
                           <Row>
                            <Card>
                              <Row>
                                <Col sm="4">
                                  <CardImg width="100%" src={location.image} alt="Card image cap" />
                                </Col>
                                <Col sm="8">
                                  <CardBody>
                                    <CardTitle>{location.city}</CardTitle>
                                    <CardSubtitle>{location.name}</CardSubtitle>
                                  </CardBody>
                                </Col>
                              </Row>
                            </Card>
                           </Row>
                         </Col>
                      </Link>
                    </div>
                  </Col>
                )
              }else{
                return (
                  <Col sm="6">
                    <div key={location.id} className="international">
                      <Link 
                        key={location.id} 
                        to={`/locations/${location.name}`}
                        state={{ location, startDate, endDate }}>
                          <Col sm="6">
                            <Row>
                              <Card>
                                <Row>
                                  <Col sm="5">
                                    <CardImg width="100%" src={location.image} alt="Card image cap" />
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
                          </Col>
                      </Link>
                    </div>
                  </Col>
                )
              }
            })}
          </Row>
        </div>
      </Container>
    );
  }
}
export default Locations
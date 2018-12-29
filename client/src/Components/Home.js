import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
class Home extends Component {
  state = {};

  render() {
    const grid = this.props.grid.flat()
    return (
      <Grid>
        <Row className="show-grid">
          {grid.map((col, id) => (
            <Col style = {{color: this.props.color}} className="column" key = {id}>{col}</Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Home;

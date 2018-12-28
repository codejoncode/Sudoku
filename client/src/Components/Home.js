import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; 
class Home extends Component {
    state = {

    }

    render () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col className = "column">0</Col>
                </Row>
            </Grid>
        )
    }
}

export default Home; 
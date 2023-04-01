import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { images } from "./images";

function App() {

  // spliting array into two to render only two lines
  const groupIntoTwo = (array) => {
    const midpointIndex = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, midpointIndex);
    const secondHalf = array.slice(midpointIndex);
    return [firstHalf, secondHalf];
  }


  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col className="m-5 px-5 text-center col-8">
            <h1>Easily connect all your favorite tools with monday.com</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {groupIntoTwo(images).map((group, i) => {
          return (
            <Row key={i} className="justify-content-md-center mb-3" style={{ flexWrap: 'nowrap' }}>
              {group.map((img, index) => {
                return (
                  <Col key={index}>
                    <img
                      src={img.src}
                      alt="Moving Image"
                      className="moving-image"
                    />
                  </Col>
                )
              })}
            </Row>
          )
        })}
      </Container>
    </>
  );
}

export default App;

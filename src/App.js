import React from 'react';
import './App.css';
import logo from './assets/logo-hbsis.svg'
import { Row, Col, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Row className="header bg-hbsis">
        <Col lg={4} md={4}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Col>
      </Row>
      <Row className="full-height">
        <Col className="menu full-height bg-hbsis">
          <Navbar bg="hbsis">
            <Navbar.Brand href="#home" className="menu-link">Home</Navbar.Brand>
          </Navbar>
          <Navbar bg="hbsis">
            <Navbar.Brand href="#pessoa" className="menu-link">Pessoa</Navbar.Brand>
          </Navbar>
        </Col>
        <Col md={11} >
          Olar
        </Col>
      </Row>
    </>
  );
}

export default App;

import logo from 'assets/logo-hbsis.svg';
import Routes from 'configs/routes';
import React from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import './index.css';

export default function Template() {
    return (
        <BrowserRouter>
            <Row className="header bg-hbsis">
                <Col lg={4} md={4}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Col>
            </Row>
            <Row className="full-height">
                <Col className="menu full-height bg-hbsis">
                    <Navbar bg="hbsis" variant="dark">
                        <Navbar.Brand className="menu-link">
                            <Link to="/home" className="navbar-brand">Home</Link>
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="hbsis" variant="dark">
                        <Navbar.Brand className="menu-link">
                            <Link to="/pessoas" className="navbar-brand">Pessoas</Link>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
                <Col md={11} className="content" >
                    <Routes />
                </Col>
            </Row>
        </BrowserRouter>
    );
}

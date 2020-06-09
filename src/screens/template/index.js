import logo from 'assets/logo-hbsis.svg';
import React from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import './index.css';

export default function Template() {
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
                    <Navbar bg="hbsis" variant="dark">
                        <Navbar.Brand className="menu-link">
                            Home
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar bg="hbsis" variant="dark">
                        <Navbar.Brand className="menu-link">
                            Pessoas
                        </Navbar.Brand>
                    </Navbar>
                </Col>
                <Col md={11} className="content" >
                    <div>Olar</div>
                </Col>
            </Row>
        </>
    );
}

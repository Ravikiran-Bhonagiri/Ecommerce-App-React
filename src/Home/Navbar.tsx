// src/components/Navbar.tsx

import React, { useState } from 'react';
import Login from '../User/Login';
import Register from '../User/Register';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap modal components


const Navbar: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
  
    const handleLoginClick = () => setShowLogin(true);
    const handleRegisterClick = () => setShowRegister(true);
    const handleCloseLogin = () => setShowLogin(false);
    const handleCloseRegister = () => setShowRegister(false);
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={handleLoginClick}>Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleRegisterClick}>Register</button>
            </li>
          </ul>
        </div>
  
        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogin}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  
        <Modal show={showRegister} onHide={handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Register />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseRegister}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    );
  };
  
  export default Navbar;
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './User_loginCss.css'


function User_loginMod({show, onHide}) {
  const navigate = useNavigate()

  const handleRedirect = (event) => {
    navigate('/discover')
  };
  const handleLoginSignup = (event) => {
    navigate('/login')
  }

  return (
    <Modal
      className='event-login-modal'
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Are you Logged In?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>I am Ready to Make an Impact!</h4>
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
      <Button variant="secondary" onClick={handleLoginSignup}>Signup/login</Button>
          <Button variant="primary" onClick={handleRedirect}>go back</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default User_loginMod;
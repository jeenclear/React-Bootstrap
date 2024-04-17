import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Admin() {
  return <>
    <div className="accounts-layout">

      <div className="mb-4 accounts-1ouodll">
        <div class="accounts-9h7rcb">
            <span class="accounts-ccksxp">Total Balance</span>
            <div class="accounts-11bzrzp">
              <span class="accounts-8usw5u">$0.00</span>
              <div class="accounts-1tdmyga">
                <div class="accounts-1y5nfpn"><div class="accounts-1hzf7y6"></div></div>
              </div>
            </div>
        </div>
      </div>
      
      <div className="mb-4 accounts-1ouodll">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  </>;
};

export default Admin;
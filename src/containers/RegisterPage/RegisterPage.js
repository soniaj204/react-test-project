import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class RegisterPage extends Component {
  state = {};
  render() {
    return (
      <div className="py-5">
        <div className="col-md-6 offset-md-3">
          <div className="text-center pb-4">
            <h2>Register</h2>
          </div>
          <Form>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text" name="lastname" id="lastname" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
            </FormGroup>
            <div className="mt-4">
              <Button color="primary">Submit</Button>
              <Link to="/login" className="ml-4">
                Cancel
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

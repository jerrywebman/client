import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../services/firebase";
import { AuthContext } from "../services/Auth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  //   if (!currentUser) {
  //     return <Redirect to="/markets" />;
  //   }

  return (
    <FormGroup className="add-form">
      <h3>Coinnewsafrica Login Form</h3>
      <hr></hr>
      <Form onSubmit={handleLogin}>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter a valid email"
          name="email"
          className="mb-3"
        />

        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="mb-3"
        />

        <Button
          style={{ marginTop: "2rem" }}
          block
          type="submit"
          className="mb-3"
        >
          Login
        </Button>
      </Form>
    </FormGroup>
  );
};

export default withRouter(Login);

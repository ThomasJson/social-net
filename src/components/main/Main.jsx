import "./main.scss";
import React from "react";
import Form from "react-bootstrap/Form";

const Main = () => {
  return (
    <Form id="switch-form">
      <Form.Check type="switch" id="custom-switch" />
    </Form>
  );
};

export default Main;

import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

export const ModeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label="None" type="radio" value="small" />
      <Form.Radio label="Development" type="radio" value="medium" />
      <Form.Radio label="Production" type="radio" value="large" />
    </Form.Group>
  </Form>
);

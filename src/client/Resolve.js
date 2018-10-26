import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

export const ResolveForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

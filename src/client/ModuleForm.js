import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

export const ModuleForm = (
  <Form>
    <Form.Group grouped>
      <Form.Input
        label="Module"
        value=""
        placeholder="Please enter your module"
      />
      <Form.Button label="Red" value="Add">
        Add
      </Form.Button>
      <Form.Input
        label="Module rules"
        value=""
        placeholder="Enter your module rules"
      />
    </Form.Group>
  </Form>
);

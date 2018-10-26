import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

export const OutputForm = (
  <Form>
    <Form.Group grouped>
      <Form.Input
        label="Output Filename"
        name="color"
        value=""
        placeholder="Enter your output filename"
      />
      <Form.Input
        label="Output Public Path"
        name="color"
        value=""
        placeholder="Enter your output public path"
      />
      <Form.Input
        label="Output Library"
        name="color"
        value=""
        placeholder="Enter your output library"
      />
      <Form.Input
        label="Output Library Target"
        name="color"
        value=""
        placeholder="Enter your output library target"
      />
    </Form.Group>
  </Form>
);

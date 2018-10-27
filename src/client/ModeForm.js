import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

const options = [
  { text: "None", value: "None" },
  { text: "Development", value: "Development" },
  { text: "Production", value: "Production" }
];

export class ModeForm extends React.Component {
  render() {
    return (
      <Form onChange={e => this.props.modeFormHandler(e)}>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Mode"
            options={options}
            placeholder="Mode"
          />
        </Form.Group>
      </Form>
    );
  }
}

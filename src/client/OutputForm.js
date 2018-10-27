import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

export class OutputForm extends React.Component(props) {
  render() {
    return (
      <Form>
        <Form.Group grouped>
          <Form.Input
            label="Output Path"
            type="text"
            value={this.props.value}
            placeholder="Enter your output path"
            onChange={e => this.props.outputPathFormHandler(e)}
          />
          <Form.Input
            label="Output Filename"
            type="text"
            value={this.props.value}
            placeholder="Enter your output filename"
            onChange={e => this.props.outputFilenameFormHandler(e)}
          />
          <Form.Input
            label="Output Public Path"
            type="text"
            value={this.props.value}
            placeholder="Enter your output public path"
            onChange={e => this.props.outputPublicPathFormHandler(e)}
          />
          <Form.Input
            label="Output Library"
            type="text"
            value={this.props.value}
            placeholder="Enter your output library"
            onChange={e => this.props.outputLibraryFormHandler(e)}
          />

          <Form.Input
            label="Output Library Target"
            value={this.props.value}
            onChange={e => this.props.outputLibraryTargetHandler(e)}
            placeholder="Enter your output library target"
          />
        </Form.Group>
      </Form>
    );
  }
}

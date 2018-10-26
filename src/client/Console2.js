import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";

const ModeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label="None" type="radio" value="small" />
      <Form.Radio label="Development" type="radio" value="medium" />
      <Form.Radio label="Production" type="radio" value="large" />
    </Form.Group>
  </Form>
);

const EntryForm = (
  <Form>
    <Form.Group grouped>
      <Form.Input
        label="Entry point"
        value=""
        placeholder="Enter your entry point"
      />
    </Form.Group>
  </Form>
);

const OutputForm = (
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

const ModuleForm = (
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

const ResolveForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const PerformanceForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const DevtoolForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const ContextForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const TargetForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);
const ExternalsForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

const StatsForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);
const DevserverForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);
const PluginsForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label="Red" name="color" value="red" />
      <Form.Checkbox label="Orange" name="color" value="orange" />
      <Form.Checkbox label="Green" name="color" value="green" />
      <Form.Checkbox label="Blue" name="color" value="blue" />
    </Form.Group>
  </Form>
);

export class AccordionExampleMenu extends React.Component {
  state = { activeIndex: undefined };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion as={Menu} vertical>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 0}
            content="Mode"
            index={0}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 0} content={ModeForm} />
        </Menu.Item>

        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 1}
            content="Entry"
            index={1}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 1} content={EntryForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 2}
            content="Output"
            index={2}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 2} content={OutputForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 3}
            content="Module"
            index={3}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 3} content={ModuleForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 4}
            content="Resolve"
            index={4}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 4} content={ResolveForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 5}
            content="Performance"
            index={5}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 5}
            content={PerformanceForm}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 6}
            content="Devtool"
            index={6}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 6}
            content={PerformanceForm}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 7}
            content="Context"
            index={7}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 7}
            content={PerformanceForm}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 8}
            content="Target"
            index={8}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 8} content={TargetForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 9}
            content="Externals"
            index={9}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 9}
            content={ExternalsForm}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 10}
            content="Stats"
            index={10}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 10} content={StatsForm} />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 11}
            content="Devserver"
            index={11}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 11}
            content={DevserverForm}
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 12}
            content="Plugins"
            index={12}
            onClick={this.handleClick}
          />
          <Accordion.Content
            active={activeIndex === 12}
            content={PluginsForm}
          />
        </Menu.Item>
      </Accordion>
    );
  }
}

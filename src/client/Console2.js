import React from "react";
import { Accordion, Form, Menu } from "semantic-ui-react";
import { ContextForm } from "./ContextForm";
import { DevserverForm } from "./DevserverForm";
import { Devtool } from "./Devtool";
import { Display } from "./Display";
import { EntryForm } from "./EntryForm";
import { ExternalsForm } from "./Externals";
import { ModeForm } from "./ModeForm";
import { ModuleForm } from "./ModuleForm";
import { OutputForm } from "./OutputForm";
import { PerformanceForm } from "./Performance";
import { PluginsForm } from "./PluginsForm";
import { ResolveForm } from "./Resolve";
import { StatsForm } from "./StatsForm";
import { TargetForm } from "./TargetForm";

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
          <Accordion.Content
            active={activeIndex === 0}
            content={<ModeForm />}
          />
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
          <Accordion.Content
            active={activeIndex === 2}
            content={<OutputForm />}
          />
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

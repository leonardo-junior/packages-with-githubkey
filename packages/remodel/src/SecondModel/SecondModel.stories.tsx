import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecondModel } from './SecondModel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SecondModel',
  component: SecondModel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SecondModel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondModel> = (args) => <SecondModel {... args}  />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'lala',
  bg: 'green'
};
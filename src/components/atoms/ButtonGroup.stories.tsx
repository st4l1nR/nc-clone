import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonGroup, { props } from './ButtonGroup';

export default {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<props> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

import React from 'react'

import { Button } from './'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    appearance: { control: { type: 'select', options: ['primary', 'secondary', 'outline'] } }
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  backgroundColor: '#000',
  appearance: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  appearance: 'secondary',
  children: 'Button',
  size: 'small',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button',
}
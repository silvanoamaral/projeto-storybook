import React from 'react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import { Button } from './'

export default {
  title: 'UI/Button',
  component: Button,
  // decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    appearance: { control: { type: 'select', options: ['primary', 'secondary', 'disabled'] } },
    kind: { control: { type: 'select', options: ['solid', 'outline', 'link'] } }
  },
}

// export const Default = () => (
//   <Button
//     kind={select(
//       'Kind',
//       {
//         Solid: 'solid',
//         Outline: 'outline',
//         Link: 'link',
//       },
//       'solid',
//     )}
//     appearance={select(
//       'Appearance',
//       {
//         Primary: 'primary',
//         Secondary: 'secondary',
//         Disabled: 'disabled',
//       },
//       'primary',
//     )}
//     size={select(
//       'Size',
//       {
//         Small: 'small',
//         Medium: 'medium',
//         Large: 'large',
//       },
//       'small',
//     )}
//     color={select(
//       'Color',
//       {
//         Primary: 'primary',
//         Secondary: 'secondary',
//         Warning: 'warning',
//         Danger: 'danger',
//         Info: 'info',
//       },
//       'primary',
//     )}
//   >
//     Button
//   </Button>
// )


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
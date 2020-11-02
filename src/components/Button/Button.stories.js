import React from 'react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import { Button } from './'

export default {
  title: 'UI/Button',
  component: Button,
  // decorators: [withKnobs],
  argTypes: {
    bg: { control: 'color' },
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
  appearance: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  appearance: 'secondary',
  size: 'small',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Button',
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Button',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Button',
  size: 'large',
}

export const Disabled = Template.bind({})
Disabled.args = {
  appearance: 'disabled',
  children: 'Button',
  size: 'medium',
}
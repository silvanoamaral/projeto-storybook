import { configure, addParameters, addDecorator } from '@storybook/react'
import themeDecorator from './themeDecorator'

import storyBookTheme from './theme'

addParameters({
  options: {
    theme: storyBookTheme
  },
})

addDecorator(themeDecorator)

//automatically import all files ending in *.stories.js
const context = require.context('../src', true, /\.stories\.(js|mdx)$/)

configure(context, module)
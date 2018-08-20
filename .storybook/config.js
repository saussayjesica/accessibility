import { configure } from '@storybook/react'

configure(loadStories, module)
function loadStories() {
  const req = require.context('../src/components', true, /\.story\.jsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

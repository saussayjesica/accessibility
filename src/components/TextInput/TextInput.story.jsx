import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextInput from './TextInput'

storiesOf('TextInput', module).add('default', () => (
  <TextInput name="input-01" id="input-01" type="text" />
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FormField from './FormField'
import TextInput from '../TextInput/TextInput'
import { AkCode } from '@atlaskit/code'

storiesOf('FormField', module)
  .add('default', () => (
    <div style={{ width: '50%', margin: '20px' }}>
      <AkCode text={test} language="html" />
      <FormField label="Email">
        <TextInput name="Email" type="text" />
      </FormField>
    </div>
  ))
  .add('required', () => (
    <div style={{ width: '50%', margin: '20px' }}>
      <FormField label="Email" caption="You must add an email address" required>
        <TextInput name="Email" type="text" />
      </FormField>
    </div>
  ))
  .add('invalid', () => (
    <div style={{ width: '50%', margin: '20px' }}>
      <FormField
        label="Email"
        caption="Please enter a valid email address"
        invalid
      >
        <TextInput />
      </FormField>
    </div>
  ))

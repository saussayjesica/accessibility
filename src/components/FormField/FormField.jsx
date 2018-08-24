import React from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid'
import { Label, Caption, Asterix } from './FormField.style'

class FormField extends React.Component {
  state = {
    labelId: uuidv4(),
    helpTextId: uuidv4(),
  }
  render() {
    const {
      label,
      children,
      required,
      invalid,
      caption,
      hideLabel,
    } = this.props
    const { labelId, helpTextId } = this.state
    return (
      <div>
        <Label htmlFor={labelId} hideLabel={hideLabel}>
          {label}
          {required && <Asterix>*</Asterix>}
        </Label>
        {React.cloneElement(children, {
          id: labelId,
          ['aria-describedby']: helpTextId,
          required: required,
        })}
        {invalid && <Caption id={helpTextId}>{caption}</Caption>}
      </div>
    )
  }
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  caption: PropTypes.string,
  hideLabel: PropTypes.bool,
}

FormField.defaultProps = {
  required: false,
  invalid: false,
  caption: '',
  hideLabel: false,
}

export default FormField

import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './TextInput.style'

const TextInput = ({ name, id, placeholder, type, required, invalid }) => (
  <StyledInput
    name={name}
    id={id}
    placeholder={placeholder}
    type={type}
    aria-required={required}
    required={required}
    invalid={invalid}
  />
)

TextInput.propTypes = {
  /** Defines what the name of the attribute will be when the form is submitted */
  name: PropTypes.string.isRequired,
  /** Used to associate a label with the input */
  id: PropTypes.string.isRequired,
  /** Specifies a short hint that describes the expected value */
  placeholder: PropTypes.string,
  /** Defines the input type */
  type: PropTypes.string.isRequired,
  /** Marks input as required */
  required: PropTypes.bool,
  /** Marks the value of the input as invalid */
  invalid: PropTypes.bool,
}

TextInput.defaultProps = {
  placeholder: null,
  required: false,
  invalid: false,
}

export default TextInput

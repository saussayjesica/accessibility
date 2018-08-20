import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  name,
  id,
  placeholder,
  type,
  onBlur,
  onChange,
  onFocus,
  disabled,
  ariaRequired,
}) => (
  <input
    name={name}
    id={id}
    placeholder={placeholder}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    disabled={disabled}
    aria-required={ariaRequired}
  />
)

Input.propTypes = {
  /** Defines what the name of the attribute will be when the form is submitted */
  name: PropTypes.string.isRequired,
  /** Used to associate a label with the input */
  id: PropTypes.string.isRequired,
  /** Specifies a short hint that describes the expected value  */
  placeholder: PropTypes.string,
  /** Defines the input type */
  type: PropTypes.string.isRequired,
  /** Runs a function when the element loses focus */
  onBlur: PropTypes.func,
  /** Runs a function when the user changes the value of the given element */
  onChange: PropTypes.func,
  /** Runs a function when the user sets focus on the given element */
  onFocus: PropTypes.func,
  /** Disables the txet field */
  disabled: PropTypes.bool,
  /** Used to indicate that user input is required */
  ariaRequired: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: PropTypes.string,
  onBlur: PropTypes.function,
  onChange: PropTypes.function,
  onFocus: PropTypes.function,
  disabled: PropTypes.bool,
  ariaRequired: PropTypes.bool,
}

export default Input

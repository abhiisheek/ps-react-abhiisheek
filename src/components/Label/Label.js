import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, block styling and htlmFor attribute */
class Label extends PureComponent {
  render() {
    const { htmlFor, label, required } = this.props;
    return (
      <label style={{ display: 'block' }} htmlFor={htmlFor}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
    );
  }
}

Label.propTypes = {
  /** HTML ID for the associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk if true, marking as the field required */
  required: PropTypes.bool
};

export default Label;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** Progress bar showing the progress for the given value with appropriate color indicator. */
class ProgressBar extends PureComponent {
  getColor = percent => {
    if (percent === 100) {
      return 'green';
    } else if (percent > 50) {
      return 'lightgreen';
    } else {
      return 'red';
    }
  };

  getWidthAsPercentOfTotalWidth = (width, percent) =>
    parseInt(width * (percent / 100), 10);

  render() {
    const { width, height, percent } = this.props;
    return (
      <div style={{ border: '1px solid lightgray', width }}>
        <div
          style={{
            width: this.getWidthAsPercentOfTotalWidth(width, percent),
            height,
            backgroundColor: this.getColor(percent)
          }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Bar Width */
  width: PropTypes.number.isRequired,

  /** Bar Height */
  height: PropTypes.number,

  /** Percentage of progress completed */
  percent: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;

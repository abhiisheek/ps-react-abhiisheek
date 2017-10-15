import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {

  it('should return 250 for the given width 500 and 50 percent', () => {
    const wrapper = shallow(<ProgressBar width={500} percent={50} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth(500, 50);

    expect(width).toBe(250);
  });
});
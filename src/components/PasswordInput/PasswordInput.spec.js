import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  it('Should match the snapshot', () => {
    const snapshot = renderer
      .create(
        <PasswordInput
          htmlId="password-input-example-all-features"
          name="password"
          onChange={() => {}}
          value="valureFor#123"
        />
      )
      .toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('toggle password visiblity on clicking the show icon', () => {
    const wrapper = shallow(
      <PasswordInput
        htmlId="password-input-example-all-features"
        name="password"
        onChange={() => {}}
        value="valureFor#123"
        showVisibilityToggle
      />
    );

    expect(wrapper.find({ type: 'password' })).toHaveLength(1);
    expect(wrapper.find({ type: 'text' })).toHaveLength(0);

    wrapper.find('a').simulate('click');

    expect(wrapper.find({ type: 'password' })).toHaveLength(0);
    expect(wrapper.find({ type: 'text' })).toHaveLength(1);
  });
});

import React from 'react';
import NotFoundScreen from '../NotFoundScreen';
import { shallow } from 'enzyme';

describe('<NotFoundScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFoundScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import HomeScreen from '../HomeScreen';
import { shallow } from 'enzyme';

describe('<HomeScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});

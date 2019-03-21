import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import NotFoundScreen from '../../NotFoundScreen';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render NotFoundScreen when goes to a wrong path', () => {
    // eslint-disable-next-line
    history.replaceState({}, 'WrongPath', '/wrongpath');
    const wrapper = mount(<App />);
    expect(wrapper.find(NotFoundScreen).length).toEqual(1);
  });
});

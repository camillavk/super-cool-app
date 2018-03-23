import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('displays the app name', () => {
  const wrapper = shallow(<Header />);
  const app_name = <h2>Super Cool App</h2>;

  expect(wrapper.contains(app_name)).toEqual(true);
})

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

describe('app name', () => {
  it('displays the defaul app name', () => {
    const wrapper = shallow(<Header />);
    const app_name = <h2>Super Cool App</h2>;

    expect(wrapper).toContainReact(app_name)
  });

  it('can display a different name if passed to it', () => {
    const wrapper = shallow(<Header app_name='Really Super Cool App' />);
    const app_name = <h2>Really Super Cool App</h2>;

    expect(wrapper).toContainReact(app_name)
  });
})

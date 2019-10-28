import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../components/App';

import { shallow } from 'enzyme';
import { exportAllDeclaration } from '@babel/types';

describe('render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });
  it('should render a header', () => {
    const head = wrapper.find('header.App-header');
    expect(head.length).toEqual(1);
  });
  it('should have a title', () => {
    const title = wrapper.find('h1.App-title');
    expect(title.length).toEqual(1);
  });
  it('should render 4 tabs', () => {
    const routes = wrapper.find('Tab');
    expect(routes.length).toEqual(4);
  });
  it('should render 4 routes', () => {
    const routes = wrapper.find('Route');
    expect(routes.length).toEqual(4);
  });
})
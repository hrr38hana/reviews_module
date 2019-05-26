import React from 'react';
import App from './index.jsx';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly with no props', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should have a state object containing rating, reviews, and product properties', () => {
    const app = shallow(<App />);
    expect(app.state).toMatchSnapshot();
  });
});

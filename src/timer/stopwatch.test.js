import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import Stopwatch from './stopwatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stopwatch />, div);
});

it('displays "START" when not running', () => {
  const sw = shallow( <Stopwatch /> );
  expect(sw.text()).toContain('START');
});

it('displays "LAP" when running before all runners have finished', () => {
  const sw = shallow( <Stopwatch allRunnersFinished={false} /> );
  sw.find('.stopwatch').simulate('click');
  expect(sw.text()).toContain('LAP');
});

it('displays "STOP" when running before all runners have finished', () => {
  const sw = shallow( <Stopwatch allRunnersFinished={true} /> );
  sw.find('.stopwatch').simulate('click');
  expect(sw.text()).toContain('STOP');
});
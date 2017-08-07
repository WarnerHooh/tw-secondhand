import * as React from 'react';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';
import Input from './Input';

it('Input shallow renders with id', () => {
  const wrapper = render(<Input id="input-id"/>);

  expect(wrapper.find('#input-id').length).toBe(1);
});

it('Input shallow renders with type', () => {
  const wrapper = render(<Input type="file"/>);

  expect(wrapper.find('[type="file"]').length).toBe(1);
});

it('Input shallow renders with placeholder', () => {
  const wrapper = render(<Input placeholder="input your name"/>);

  expect(wrapper.find('[placeholder="input your name"]').length).toBe(1);
});

it('Input shallow renders with className', () => {
  const wrapper = render(<Input className="input-class"/>);

  expect(wrapper.find('.input-class').length).toBe(1);
});

it('Input shallow renders with accept', () => {
  const wrapper = render(<Input accept="image/*"/>);

  expect(wrapper.find('[accept="image/*"]').length).toBe(1);
});

it('Input shallow renders with onChange', () => {
  const onChange = spy();
  const wrapper = shallow(<Input onChange={onChange}/>);
  const inputWrapper = wrapper.find('input');
  inputWrapper.simulate('change');
  expect(onChange.called).toBe(true);
});

it('Input shallow renders with id, type, placeholder, className, accept, onChange', () => {
  const onChange = spy();
  const wrapper = shallow(<Input id="input-id" type="file" placeholder="input your name" className="input-class" accept="image/*" onChange={onChange}/>);

  expect(wrapper.find('#input-id').length).toBe(1);
  expect(wrapper.find('[type="file"]').length).toBe(1);
  expect(wrapper.find('[placeholder="input your name"]').length).toBe(1);
  expect(wrapper.find('.input-class').length).toBe(1);
  expect(wrapper.find('[accept="image/*"]').length).toBe(1);
  const inputWrapper = wrapper.find('input');
  inputWrapper.simulate('change');
  expect(onChange.called).toBe(true);
});

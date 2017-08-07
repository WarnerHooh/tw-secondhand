import * as React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

describe('<Button />', () => {
  it('Button shallow renders', () => {
    const wrapper = shallow(<Button className="btn" text="test" />);

    expect(wrapper.find('.btn').length).toBe(1);
    expect(wrapper.find('button').text()).toEqual('test');
  });

/*
  it('click function should be called when button is clicked', () => {
    console.log()
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick} />);

    wrapper.find('button').simulate('click');

    expect(onButtonClick.calledOnce).toEqual(true);
});
*/

}

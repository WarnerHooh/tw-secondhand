import * as React from 'react';
import { shallow } from 'enzyme';
import * as D from '../../../definitions';
import { spy } from 'sinon';

import ListItem from './ListItem';

const person: D.Person = {
  username: "zenglei",
  objectId: "596dcde4fe88c2c1d4117a96",
};

export const sampleItem: D.Product = {
  name: "iphone 6s",
  price: "2500",
  img: "http://ac-o3k0vdl1.clouddn.com/48b4b293ef82b71678af.jpg",
  description: "very cheap!!!!",
  owner: person,
  objectId: "5979c4d6a0bb9f0058eb6d69",
};

describe('<ListItem />', () => {
  it('ListItem shallow renders', () => {
    const wrapper = shallow(<ListItem listItem={sampleItem} />);

    expect(wrapper.find('.ListItem').length).toBe(1);
    expect(wrapper.find('.img-wrapper > img').length).toBe(1);
  });

  it('click function should be called when listItem is clicked', () => {
    const handleClick = spy();
    const wrapper = shallow(<ListItem listItem={sampleItem} handleClick={handleClick} />);

    wrapper.find('div.ListItem').simulate('click');

    expect(handleClick.calledOnce).toEqual(true);
  });

});

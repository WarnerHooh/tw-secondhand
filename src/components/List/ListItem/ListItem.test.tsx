import * as React from 'react';
import { shallow } from 'enzyme';
import * as D from '../../../definitions';

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

it('ListItem shallow renders', () => {
  const wrapper = shallow(<ListItem listItem={sampleItem} />);

  expect(wrapper.find('.ListItem').length).toBe(1);
  expect(wrapper.find('.ListItem > img').length).toBe(1);
});

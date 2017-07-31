import * as React from 'react';
import { render } from 'enzyme';
import List from './List';

import { sampleItem } from './ListItem/ListItem.test';

it('List shallow renders', () => {
  const wrapper = render(<List list={[]} />);

  expect(wrapper.find('.List-container').length).toBe(1);
  expect(wrapper.find('.ListItem').length).toBe(0);
});

it('List shallow renders with 1 ListItem', () => {

  const wrapper = render(<List list={[sampleItem]} />);

  expect(wrapper.find('.List-container').length).toBe(1);
  expect(wrapper.find('.ListItem').length).toBe(1);
});

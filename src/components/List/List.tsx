import * as React from 'react';
import './List.css';
import * as D from '../../definitions';

import ListItem from './ListItem/ListItem';

interface ListProps {
  list: Array<D.Product>;
}

export default (props: ListProps) => (
  <div className="List-container">
    {props.list.map((listItem, index) => (
      <ListItem key={listItem.objectId} listItem={listItem} />
    ))}
  </div>
);

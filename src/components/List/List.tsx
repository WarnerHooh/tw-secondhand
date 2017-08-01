import * as React from 'react';
import './List.css';
import * as D from '../../definitions';

import ListItem from './ListItem/ListItem';

interface ListProps {
  list: Array<D.Product>;
  isSpecial?: boolean;
  handleClick?: Function;
}

export default (props: ListProps) => (
  <div className="List-container">
    {props.list.map((listItem, index) => (
      <ListItem
        key={listItem.objectId}
        listItem={listItem}
        isSpecial={props.isSpecial || false}
        handleClick={props.handleClick}
      />
    ))}
  </div>
);

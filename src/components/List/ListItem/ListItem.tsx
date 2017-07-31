import * as React from 'react';
import './ListItem.css';
import * as D from '../../../definitions';

interface ListItemProps {
  listItem: D.Product;
}

const icon = require('./user.ico');

export default (props: ListItemProps) => {
  const { name, img, price, owner } = props.listItem;
  return (

    <div className="ListItem">
      <img src={img} alt="image"/>
      <div>
        <h3>{name}</h3>
        <p className="price">&#165; {price}</p>
        <p className="owner">
          <img src={icon} alt="user icon"/>
          <span>{owner.username}</span>
        </p>
      </div>
    </div>
  );
};

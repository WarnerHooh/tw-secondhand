import * as React from 'react';
import './ListItem.css';
import * as D from '../../../definitions';

interface ListItemProps {
  listItem: D.Product;
  special: boolean;
}

const icon = require('./user.ico');

export default (props: ListItemProps) => {
  const { name, img, price, owner, buyer } = props.listItem;
  const isSpecial = props.special;
  const isBought = 'buyer' in props.listItem;
  const content = isBought ? (
    <div>
      <p className="buyer">
        <img src={icon} alt="user icon"/>
        <span>{buyer.username}</span>
      </p>
      <p>交易关闭</p>
    </div>
  ) : (
    <p className="message">
      出售中
    </p>
  );

  return (
    <div className="ListItem">
      <img src={img} alt="image"/>
      <div>
        <h3>{name}</h3>
        <p className="price">&#165; {price}</p>
        {
          !isSpecial ? (
            <p className="owner">
              <img src={icon} alt="user icon"/>
              <span>{owner.username}</span>
            </p>
          ) : (content)
        }
      </div>
      {
        isSpecial && isBought ? <div className="mask">&nbsp;</div> : null
      }
    </div>
  );
};

import * as React from 'react';
import './ListItem.css';
import * as D from '../../../definitions';

interface ListItemProps {
  listItem: D.Product;
  isSpecial?: boolean;
  handleClick?: Function;
}

const icon = require('../../../styles/assets/user.ico');

export default (props: ListItemProps) => {
  const { listItem, isSpecial, handleClick } = props;
  const { name, img, price, owner, buyer } = listItem;
  const isBought = 'buyer' in listItem;
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
    <div
      className="ListItem"
      onClick={() => {
        if (handleClick) {
          handleClick(listItem);
        }
      }}
    >
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

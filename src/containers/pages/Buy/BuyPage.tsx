import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { Button } from '../../../components';
import { buyProduct } from '../../../modules/product/actions';
import { v4 as uuid } from 'uuid';
import * as modalAction from '../../../modules/modal/action';
import './BuyPage.css';

type BuyPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState;
  product: D.Product;
};

const icon = require('./user.ico');

class BuyPage extends React.Component<BuyPageProps<object>> {
  constructor(props: BuyPageProps<object>) {
    super(props);
  }
  handleClick = (productId) => () => {
    const { user, dispatch } = this.props;
    if (user.name) {
      dispatch(buyProduct(productId));
    } else {
      dispatch(modalAction.show({
        id: uuid(),
        anchor: '#signInModal',
      }));
    }
  }

  render() {
    const { product } = this.props;
    return (
    <div className="buy">
      <h3>商品详情</h3>
      <div className="pro-img">
        <img src={product.img} alt="product"/>
      </div>
      <div className="pro">
        <div> {product.name} </div>
        <div className="detail">
          <p className="price">{product.price}</p>
          <p className="owner-name">
            <img src={icon} alt="user icon"/>
            <span> {product.owner.username} </span>
          </p>
        </div>
      </div>
      <p className="description"> {product.description} </p>
      <div className="buy-button">
       <Button
            text="立即购买"
            className="btn"
            onClick={this.handleClick(product.objectId)}
       />
       </div>
    </div>
  );
  }
}

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(BuyPage);

import * as React from 'react';
import * as Redux from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { Button } from '../../../components';
import { buyProduct } from '../../../modules/product/actions';
type BuyPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  dispatch?: Redux.Dispatch<object>;
  product: D.Product;
};

class BuyPage extends React.Component<BuyPageProps<object>> {
  constructor(props: BuyPageProps<object>) {
    super(props);
  }
  handleClick = (productId) => () => {
    const { dispatch } = this.props;
    dispatch(buyProduct(productId));
  }

  render() {
    const { product } = this.props;
    return (
    <div>
      <h3>商品详情</h3>
        <img src={product.img} alt="product"/>
      <div>
        <div> {product.name} </div>
        <div>
          <p>{product.price}</p>
          <p> {product.owner.username} </p>
        </div>
      </div>
       <p> {product.description} </p>
       <Button
            text="立即购买"
            className="btn"
            onClick={this.handleClick(product.owner.objectId)}
       />
    </div>
  );
  }
}

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(BuyPage);

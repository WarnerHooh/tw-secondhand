import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { getBoughtProducts } from '../../../modules/product/actions';
import { goBack } from 'react-router-redux';

import { layoutWrapper } from '../../layout';

import { List } from '../../../components/';

import './BoughtPage.css';
type BoughtPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    products: Array<D.Product>
};

class BoughtPage extends React.Component<BoughtPageProps<object>> {
  constructor(props: BoughtPageProps<object>) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getBoughtProducts());
  }

  render() {
    const { dispatch, products } = this.props;

    return (
      <div>
        <div className="back" onClick={() => dispatch(goBack())}>&larr;</div>
        <List list={products} />
      </div>
    );
  }
}

export default layoutWrapper(
  connect(
    (state: D.RootState<object>) => ({
      products: state.products.bought
    })
  )(BoughtPage),
  '已买宝贝'
);

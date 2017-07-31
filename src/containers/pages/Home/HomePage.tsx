import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { getProducts } from '../../../modules/product/actions';

import { layoutWrapper } from '../../layout';

import { List } from '../../../components/';

import './HomePage.css';
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    products: D.ProductsState
};

class HomePage extends React.Component<HomePageProps<object>> {
  constructor(props: HomePageProps<object>) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h3>精选</h3>
        <List list={products} />
      </div>
    );
  }
};

export default layoutWrapper(connect(
  (state: D.RootState<object>) => ({
    products: state.products
  })
)(HomePage));

import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { getProducts } from '../../../modules/product/actions';
import * as modalAction from '../../../modules/modal/action';
import { v4 as uuid } from 'uuid';

import { layoutWrapper } from '../../layout';

import { List } from '../../../components/';

import './HomePage.css';
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    products: Array<D.Product>
};

class HomePage extends React.Component<HomePageProps<object>> {
  constructor(props: HomePageProps<object>) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    const { dispatch, products } = this.props;

    return (
      <div>
        <h3>精选</h3>
        <List
          list={products}
          handleClick={(listItem) => {
            dispatch(modalAction.show({
              id: uuid(),
              anchor: '#buyModal',
              passProps: {
                product: listItem
              }
            }));
          }}
        />
      </div>
    );
  }
}

export default layoutWrapper(connect(
  (state: D.RootState<object>) => ({
    products: state.products.available
  })
)(HomePage));

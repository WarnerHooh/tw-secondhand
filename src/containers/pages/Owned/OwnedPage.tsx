import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { getOwnedProducts } from '../../../modules/product/actions';
import { goBack } from 'react-router-redux';

import { layoutWrapper } from '../../layout';

import { List } from '../../../components/';

import './OwnedPage.css';
type OwnedPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    products: D.ProductsState
};

class OwnedPage extends React.Component<OwnedPageProps<object>> {
  constructor(props: OwnedPageProps<object>) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getOwnedProducts());
  }

  render() {
    const { dispatch, products } = this.props;

    return (
      <div>
        <button className="back" onClick={() => dispatch(goBack())}>&larr;</button>
        <h3>出售宝贝</h3>
        <List list={products} special={true} />
      </div>
    );
  }
}

export default layoutWrapper(connect(
  (state: D.RootState<object>) => ({
    products: state.products
  })
)(OwnedPage));

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
    products: Array<D.Product>
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
        <div className="back" onClick={() => dispatch(goBack())}>&larr;</div>
        <List list={products} isSpecial={true} />
      </div>
    );
  }
}

export default layoutWrapper('出售宝贝')(connect(
  (state: D.RootState<object>) => ({
    products: state.products.owned
  })
)(OwnedPage));

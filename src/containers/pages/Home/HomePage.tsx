import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { userLogin } from '../../../modules/user/actions';
import { getProducts } from '../../../modules/product/actions';

import { layoutWrapper } from '../../layout';

import './HomePage.css';
type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: D.UserState,
    products: D.ProductsState
};

const HomePage = (props: HomePageProps<object>) => {
  const { dispatch, user, products } = props;

  return (
      <div>
        <h3>精选</h3>
        {
          products.map((product) => {
            return (
              <div key={product.objectId}>
                <p>{product.name}</p>
              </div>
            );
          })
        }
        <button onClick={() => dispatch(userLogin({username: 'zenglei', password: '123'}))}>login</button><br/>
        <button onClick={() => dispatch(getProducts())}>get available products</button>
        <p>Hello {user.name}</p>
      </div>
  );
};

export default layoutWrapper(connect(
  (state: D.RootState<object>) => ({
    user: state.user,
    products: state.products
  })
)(HomePage));

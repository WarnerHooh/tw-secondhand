import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';

type BuyPageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
};

const BuyPage = (props: BuyPageProps<object>) => (
  <div className="Publish">
    <h3>商品详情</h3>
  </div>
);

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(BuyPage);

import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';

type ReleasePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState,
};

const ReleasePage = (props: ReleasePageProps<object>) => (
  <div className="Publish">
    <h3>发布宝贝</h3>
  </div>
);

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(ReleasePage);

import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';

import { layoutWrapper } from '../../layout';

const ProfilePage = (props: DispatchProp<object> & RouteComponentProps<object>) => (
  <div>
    <h2>About me</h2>
    <p>
      <button onClick={() => props.dispatch(push('/'))}>Go Back to Home</button>
    </p>
  </div>
);

export default layoutWrapper(connect()(ProfilePage));

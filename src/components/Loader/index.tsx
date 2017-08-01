import * as React from 'react';
import { connect } from 'react-redux';
import './index.css';

import * as D from '../../definitions';

interface LoaderProps {
  loader?: boolean;
}

const Loader = (props: LoaderProps) => {
  let classNames = ['loader-container'];
  if (props.loader) {
    classNames.push('active');
  }

  return (
    <div className={`loader-container${props.loader ? ' active' : ''}`}>
      <div className="loader-main">
        <div className="loader-bounce loader-bounce1" />
        <div className="loader-bounce loader-bounce2" />
      </div>
    </div>
  );
};

export default connect(
  (state: D.RootState<object>) => ({
    loader: state.loader
  })
)(Loader);

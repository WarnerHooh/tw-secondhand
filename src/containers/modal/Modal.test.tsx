import * as React from 'react';
import { shallow } from 'enzyme';
import { v4 as uuid } from 'uuid';
import { Modal } from './Modal';
import { AppModal } from './index';

import SignUp from '../pages/SignUp/SignUpPage';

describe('Modal component test', () => {

  const modalState = [{
    id: uuid(),
    anchor: '#signUpModal'
  }];

  it('App modal container should not be rendered without modal state in store', () => {
    const appModalWithoutModal = shallow(<AppModal />);

    expect(appModalWithoutModal.find('.App-modal').length).toEqual(0);
  });

  it('App modal container should be rendered with modal state in store', () => {

    const appModalWithoutModal = shallow(<AppModal modal={modalState} />);

    expect(appModalWithoutModal.find('.App-modal').length).toEqual(1);
  });

  it('Particular modal should be rendered correctly', () => {
    const modalWrapper = shallow(<Modal anchor="#signUpModal" component={SignUp} modal={modalState} />);

    expect(modalWrapper.find('.modal-container').length).toEqual(1);
  });
});

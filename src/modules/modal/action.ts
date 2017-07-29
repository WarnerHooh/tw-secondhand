import * as D from '../../definitions';

export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_DISMISS = 'MODAL_DISMISS';
export const MODAL_DISMISS_ALL = 'MODAL_DISMISS_ALL';

export const show = (modal: D.Modal): D.ModalAction => ({ type: MODAL_SHOW, payload: modal });

export const dismiss = (modal?: D.Modal): D.GeneralAction => ({ type: MODAL_DISMISS, payload: modal });

export const dismissAll = (): D.ModalAction => ({ type: MODAL_DISMISS_ALL });

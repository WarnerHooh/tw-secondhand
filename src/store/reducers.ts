import { routerReducer as router } from 'react-router-redux';

import app from '../modules/app/reducer';
import user from '../modules/user/reducer';
import products from '../modules/product/reducer';
import modal from '../modules/modal/reducer';

export default {
    app,
    user,
    modal,
    router,
    products
};

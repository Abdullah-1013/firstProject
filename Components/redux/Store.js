import {configureStore} from '@reduxjs/toolkit';
import rootreducer from './rootreducer';

const Store=configureStore({
    reducer:rootreducer

})
export default Store;
import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLs_EXTENSION_ &&
        window.__REDUX_DEVTOOLs_EXTENSION_(),
    );

    return store;
}

export default configureStore;
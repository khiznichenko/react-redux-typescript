import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export function configureStore() {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleWares: Middleware[] = [];
    if (process.env.NODE_ENV === 'development') {
        middleWares.push(createLogger({
            duration: true,
        }));
    }

    const localData = localStorage.getItem('happenedApp');
    const persistedState = localData ? JSON.parse(localData) : {};

    const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(...middleWares)));

    store.subscribe(() => {
        localStorage.setItem('happenedApp', JSON.stringify(store.getState()));
    });

    return store;
}

import isomorphicFetch from 'isomorphic-fetch';
import promiseMiddleware from 'redux-promise-middleware';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import {creteStore, applyMiddleware} from 'redux';
import { createStore } from 'redux';

const injectMiddleware = depts => ({dispatchEvent, getState}) => next => action =>
    next(typeof action === 'function'
        ? action({...depts, dispatch, getState})
        : action
    );

    export default function configureStore(options, rootReduceer){

        //const initialState = options.initialState
        const { initialState = {} } = options;

        const middleware = [
            injectMiddleware({
                fetch: isomorphicFetch
            }),
            promiseMiddleware({
                promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
            }),
            reduxInmutableStateInvariant()
        ]


        return createStore(rootReduceer, initialState, applyMiddleware(...middleware))

    }
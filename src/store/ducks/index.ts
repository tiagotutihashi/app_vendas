import { combineReducers } from 'redux'
import reducer from './product/reducer';

const rootReducer = combineReducers({
    reducer
})

export type RootSaga = ReturnType<typeof rootReducer>;

export default rootReducer
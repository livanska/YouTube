import { combineReducers, createStore} from 'redux';
import { authReducer } from './reducers/authReducer';
const rootReducer = combineReducers({
  user: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

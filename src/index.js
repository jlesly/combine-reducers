import { combineReducers } from "redux";
import authorsReducer from './reducers/authorsReducer';
import booksReducer from './reducers/booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/rootReducer';

const persistConfig = {
  key: 'zwallet',
  storage,
<<<<<<< HEAD
  whitelist: ['user'],
}
=======
  whitelist: ['user', 'transaction'],
};

>>>>>>> 4e92df1f8c72f29f34653f17d091500412b86b4a
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

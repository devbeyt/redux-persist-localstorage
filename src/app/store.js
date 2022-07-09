import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todosSlice'
import themeSlice from '../features/theme/themeSlice'
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
        count:counterReducer,
        todo:todoReducer,
        theme: themeSlice,
})

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);
export default store
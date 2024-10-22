import { authReducer } from "./features/auth/auth-slice";
const { configureStore } = require("@reduxjs/toolkit");
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistedAuthConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};

const persistedAuth = persistReducer(persistedAuthConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

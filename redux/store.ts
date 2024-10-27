import { authReducer } from "./features/auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
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
import { markerReducer } from "./features/MarkersPlan/markers-slice";

const persistedAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuth = persistReducer(persistedAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
    markers: markerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

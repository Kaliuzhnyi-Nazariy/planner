export const selectUserID = (state: { auth: { value: { id: string } } }) =>
  state.auth.value.id;

export const selectUserIsAuth = (state: {
  auth: { value: { isAuth: Boolean } };
}) => state.auth.value.isAuth;

export const selectUserToken = (state: {
  auth: { value: { token: String } };
}) => state.auth.value.token;

export const selectUserUsername = (state: {
  auth: { value: { username: String } };
}) => state.auth.value.username;

export const selectUserEmail = (state: {
  auth: { value: { email: String } };
}) => state.auth.value.email;

export const selectUserIsLoading = (state: { auth: { isLoading: Boolean } }) =>
  state.auth.isLoading;

export const selectUserError = (state: { auth: { error: null | string } }) => {
  state.auth.error;
};

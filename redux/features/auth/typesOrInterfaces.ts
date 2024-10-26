export type UserInfoRegister = {
  username: String;
  email: String;
  password: String;
  confirmPassword: String;
};

export type regUser = {
  username: String;
  email: String;
};

export type logUser = {
  email: String;
  password: String;
};

export type User = {
  id: String;
  username: String;
  email: String;
  token: String;
};

export type UpdatedUser = Omit<User, "token">;

export type newPasswordType = {
  newPassword: String;
  confirmNewPassword: string;
};

export interface IRecieveToken {
  auth: {
    token: String;
  };
}

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

export interface IRefreshUser extends regUser {
  _id: String;
}

export type logUser = {
  email: String;
  password: String;
};

export type User = {
  _id: String;
  username: String;
  email: String;
  token: String;
};

export type UpdatedUser = Omit<User, "_id" | "token">;

export type newPasswordType = {
  newPassword: String;
  confirmNewPassword: string;
};

export interface IRecieveToken {
  auth: {
    token: String;
  };
}

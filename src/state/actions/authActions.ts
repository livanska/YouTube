export enum AuthType {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_FAIL = "LOGOUT_FAIL",
}

export const LoginSuccess = (payload: any) => ({
  type: AuthType.LOGIN_SUCCESS,
  payload,
});

export const LoginFail = (payload: any) => ({
  type: AuthType.LOGIN_FAIL,
  payload,
});

export const LogoutSuccess = () => ({
  type: AuthType.LOGOUT_SUCCESS,
});

export const LogoutFail = (payload: any) => ({
  type: AuthType.LOGOUT_FAIL,
  payload,
});

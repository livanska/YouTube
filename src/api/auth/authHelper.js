import { ClientInitObject } from "./types";
import { CLIENT_ID, DISCOVERY_URL, SCOPES } from "../../constants";
import {
  LoginFail,
  LoginSuccess,
  LogoutFail,
  LogoutSuccess,
} from "../../state/actions/authActions";
let gapi = window.gapi;
export class AuthHelper {
  isSignedIn = false;
  initClient = () => {
    gapi.load("client:auth2", () => {
      gapi.client.load("youtube", "v3", () => {
        gapi.client.init({
          [ClientInitObject.API_KEY]: `${process.env.REACT_APP_API_KEY}`,
          [ClientInitObject.CLIENT_ID]: CLIENT_ID,
          [ClientInitObject.SCOPE]: SCOPES,
          [ClientInitObject.DISCOVERY_DOCS]: DISCOVERY_URL,
        });
      });
    });
  };

  async handleLogin() {
    try {
      await gapi.auth2.getAuthInstance().signIn();
      let userData = gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getBasicProfile();
      localStorage.setItem(
        "access_token",
        gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()
          .access_token
      );
      return LoginSuccess(userData);
    } catch (e) {
      return LoginFail(e);
    }
  }

  async handleLogOut() {
    if (
      gapi.auth2.getAuthInstance().isSignedIn ||
      gapi.auth2.getAuthInstance().currentUser.get().isSignedIn()
    ) {
      try {
        await gapi.auth2.getAuthInstance().signOut();
        localStorage.removeItem("access_token");
        return LogoutSuccess();
      } catch (e) {
        return LogoutFail(e);
      }
    }
  }
}

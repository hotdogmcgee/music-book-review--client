import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  saveUserId(payload) {
    window.sessionStorage.setItem("user_id", payload.user_id);
    window.sessionStorage.setItem("date_created", payload.date_created);
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  getUserId() {
    return window.sessionStorage.getItem("user_id");
  },
  getUserDateCreated() {
    return window.sessionStorage.getItem("date_created");
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  clearUserId() {
    window.sessionStorage.removeItem("user_id");
    window.sessionStorage.removeItem("date_created");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  }
};

export default TokenService;

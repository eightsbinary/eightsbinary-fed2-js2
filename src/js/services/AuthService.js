class AuthService {
  constructor(tokenKey = 'token', userKey = 'user') {
    this.tokenKey = tokenKey
    this.userKety = userKey
  }

  get authToken() {
    return localStorage.getItem(this.tokenKey)
  }

  set authToken(token) {
    localStorage.setItem(this.tokenKey, token)
  }

  get authUser() {
    const user = localStorage.getItem(this.userKey)
    return user ? JSON.parse(user) : null;
  }

  set authUser(user) {
    localStorage.setItem(this.userKey, JSON.stringify(user))
  }

  clearAuthData() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}

export default new AuthService();
class AuthService {
  static async registerUser({ name, email, password }) {
    return { success: true, message: 'User registration placeholder', name, email, password };
  }

  static async loginUser({ email, password }) {
    return { success: true, message: 'User login placeholder', email, password };
  }
}

module.exports = AuthService;

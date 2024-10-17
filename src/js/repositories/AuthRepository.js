import { API_AUTH_LOGIN } from '../api/constants';
import { headers } from '../api/headers';
import models from '../models/index';

class AuthRepository {
  async login(email, password) {
    const response = await fetch(`${API_AUTH_LOGIN}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Login Failed');

    try {
      const result = await response.json();
      const { data, meta } = result;

      return {
        success: true,
        token: data.accessToken,
        user: new models.User(
          data.name,
          data.email,
          data.avatar,
          data.bio,
          data.banner
        ),
        meta: meta,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

export default new AuthRepository();

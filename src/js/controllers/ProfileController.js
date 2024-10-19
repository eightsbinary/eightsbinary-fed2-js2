import services from "../services/index";

class ProfileController {
  constructor() {
    this.profileService = services.ProfileService;
  }

  async profile(name) {
    try {
      const { data, meta } = await this.profileService.profile(name);
      return { data, meta };
    } catch (error) {
      console.error('Fetch profile error:', error);
      throw new Error('Fetch profile failed.');
    }
  }

  async posts(name) {
    try {
      const { data, meta } = await this.profileService.posts(name);
      return { data, meta };
    } catch (error) {
      console.error('Fetch profile error:', error);
      throw new Error('Fetch profile failed.');
    }
  }
}

export default new ProfileController();

export const routes = {
  '/': { path: './views/home.js', protected: true },
  '/auth/': { path: './views/auth/auth.js', protected: false },
  '/auth/login/': { path: './views/auth/login.js', protected: false },
  '/auth/register/': { path: './views/auth/register.js', protected: false },
  '/post/': { path: './views/post/index.js', protected: true },
  '/post/create/': { path: './views/post/create.js', protected: true },
  '/post/edit/': { path: './views/post/update.js', protected: true },
  '/profile/': { path: './views/profile.js', protected: true },
  '/notFound/': { path: './views/notFound.js', protected: false },
};

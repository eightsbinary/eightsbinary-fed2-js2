export const routes = {
  '/': { path: '/src/js/router/views/home.js', protected: true },
  '/auth/': { path: '/src/js/router/views/auth/auth.js', protected: false },
  '/auth/login/': {
    path: '/src/js/router/views/auth/login.js',
    protected: false,
  },
  '/auth/register/': {
    path: '/src/js/router/views/auth/register.js',
    protected: false,
  },
  '/post/': { path: '/src/js/router/views/post/index.js', protected: true },
  '/post/create/': {
    path: '/src/js/router/views/post/create.js',
    protected: true,
  },
  '/post/edit/': {
    path: '/src/js/router/views/post/update.js',
    protected: true,
  },
  '/profile/': { path: '/src/js/router/views/profile.js', protected: true },
  '/notFound/': { path: '/src/js/router/views/notFound.js', protected: false },
};

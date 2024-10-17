const utils = {
  redirectTo: (path) => {
    if (typeof path !== 'string') throw new Error('path must be a string');
    window.location.href = path;
  },
};

export default utils;

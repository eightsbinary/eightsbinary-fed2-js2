const utils = {
  redirectTo: (path) => {
    if (typeof path !== 'string') throw new Error('path must be a string');
    window.location.href = path;
  },

  getUrlParams: (param) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }
};

export default utils;

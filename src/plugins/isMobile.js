const isMobile = {
  install(Vue) {
    Vue.prototype.$isMobile = function() {
      if (window.matchMedia("(max-width:960px)").matches) {
        return true;
      } else {
        return false;
      }
    };
  }
};

export default isMobile;

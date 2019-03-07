export const isMobile = {
  computed: {
    isMobile() {
      if (window.matchMedia("(max-width:960px)").matches) {
        return true;
      } else {
        return false;
      }
    }
  }
};

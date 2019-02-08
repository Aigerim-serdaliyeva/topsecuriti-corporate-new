var visited = {
  mounted() {
    let path = this.$route.path.replace("/", "");
    if (path === "") {
      path = "index";
    }
    this.$store.commit("changeVisitedData", path);
  }
};

export default visited;

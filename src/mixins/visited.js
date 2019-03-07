const visited = {
  mounted() {
    let path = this.$route.path.replace("/", "");
    this.$store.commit("changeVisitedData", path);
  }
};

export default visited;

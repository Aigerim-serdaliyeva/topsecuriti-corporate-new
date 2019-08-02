const visited = {
  mounted() {
    let path = this.$route.path.replace("/", "");
    console.log(path)
    this.$store.commit("changeVisitedData", path);
  }
};

export default visited;

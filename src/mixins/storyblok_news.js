import StoryblokClient from "storyblok-js-client";
const token = "D87XrUmzF3z7gsn6eOrSlgtt";

let storyapi = new StoryblokClient({
  accessToken: token
});

var storyblok = {
  created() {
    window.storyblok.init({
      accessToken: token
    });
    window.storyblok.on("change", () => {
      this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("home", "draft");
      } else {
        this.getStory("home", "published");
      }
    });
  },
  methods: {
    getStory(slug, version) {
      storyapi
        .get(`cdn/stories/news`, {
          version: version
        })
        .then(response => {
          this.story = response.data.story;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};

export default storyblok;

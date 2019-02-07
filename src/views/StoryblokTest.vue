<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
// 1. Require the Storyblok client
import StoryblokClient from "storyblok-js-client";

// 2. Set your token
const token = "D87XrUmzF3z7gsn6eOrSlgtt";

// 3. Initialize the client with the preview token so we can access our API easily
// from your space dashboard at https://app.storyblok.com
let storyapi = new StoryblokClient({
  accessToken: token
});

export default {
  data() {
    return {
      story: {
        content: {
          body: []
        }
      }
    };
  },
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
        .get("cdn/stories/" + slug, {
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
</script>

<template lang="pug">                   
    component(:blok="story.content", :is="story.content.component")                                  
</template>

<script>
import Visited from "@/mixins/visited";
import StoryblokNews from "@/mixins/storyblok_news";

export default {
  mixins: [Visited, StoryblokNews],
  data() {
    return {
      story: {
        content: {
          body: []
        }
      }
    };
  }
};
</script>

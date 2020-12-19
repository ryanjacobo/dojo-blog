<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" v-if="showPosts" />
      <TagCloud :posts="posts" />
    </div>
    <!-- <div v-else>Loading...</div> -->
    <div v-else>
      <Spinner />
    </div>
    <div class="home-buttons">
      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Delete a post</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },

  setup() {
    const { posts, error, load } = getPosts();
    load();

    const showPosts = ref(true);

    return {
      posts,
      error,
      showPosts,
    };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
.home-buttons {
  margin: 10px auto;
}
</style>
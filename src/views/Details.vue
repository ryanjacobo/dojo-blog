<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>
      {{ post.title }}
    </h3>
    <p class="body">{{ post.body }}</p>
    <!-- <button>Delete</button> -->
    <button class="delete" @click="deleteBlog">Delete</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    // const { error, post, load } = getPost(props.id);

    // utilizing useRoute instead of props.id. "props" argument can be ommited from setup().
    const route = useRoute();
    const { error, post, load } = getPost(route.params.id);
    const router = useRouter();
    load();

    const deleteBlog = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();
      router.push({ name: "Home" });
    };

    return { error, post, deleteBlog };
  },
};
</script>

<style>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.body {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>
import { ref } from "vue";

const getTag = (tag) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3030/posts/tags/" + tag);
      if (!data.ok) {
        throw Error("That tag does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getTag;

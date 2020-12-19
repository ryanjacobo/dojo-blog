import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      //   await new Promise((resolve) => {
      //     setTimeout(resolve, 2000);
      //   }); // simulation of a loading time
      let data = await fetch("http://localhost:3030/posts/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;

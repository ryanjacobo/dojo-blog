import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  // aync-await
  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // }); // simulation of a loading time
      let data = await fetch("http://localhost:3030/posts");
      console.log(data);
      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message; // err.message = 'no data availabe'
      console.log(error.value);
      // console.log(err.message);
    }
  };
  return { posts, error, load }; // return the values from an async object
};

export default getPosts;

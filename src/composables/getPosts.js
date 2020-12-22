import { ref } from "vue";
import { projectFirestore } from "../firebase/config"; // "{}" is a must

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  // aync-await
  const load = async () => {
    try {
      const blogs = await projectFirestore
        .collection("posts")
        .orderBy("title")
        .get(); // establishes the connection to projectFirestore DB. orderBy arranges the documents by title in ascending order. to arrange it by descending order add 'desc' argument.
      console.log(blogs.docs); // .docs is the method to output the data from the collection("posts")
      //   if ((res.docs.length = 0)) {
      //     console.log("no data available");
      //     throw Error("no data available");
      //   }
      posts.value = blogs.docs.map((doc) => {
        console.log(doc.data());

        return { ...doc.data(), id: doc.id }; // "..." means all the property-value pair of each post will be outputted in an object{}. posts.value refers to value of the "const posts" not the collection("posts"). post.data() refers to the individual elements in collection.("posts"). "id: post.id" means we get the "id" from post.id (which was accessed from res.docs.map() function).
      });
    } catch (err) {
      error.value = err.message; // err.message = 'no data availabe'
      // console.log(error.value);
      // console.log(err.message);
    }
  };
  return { posts, error, load }; // return the values from an async object
};

export default getPosts;

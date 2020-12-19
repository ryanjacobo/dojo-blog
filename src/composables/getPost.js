import { ref } from "vue";
import projectFirestore from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const blog = await projectFirestore
        .collection("posts")
        .doc(id)
        .get(); // from collection('posts'), with corresponding doc(id), "get()" that element
      console.log(blog.data());

      if (!blog.exists) {
        throw Error("That post does not exist.");
      }
      post.value = /*blogs.docs.map((post) => {
          console.log(post.data());
          return*/ {
        ...blog.data(),
        id: post.id,
      };
      console.log(post.value);
      //});
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;

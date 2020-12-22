import { ref } from "vue";
import { projectFirestore } from "../firebase/config"; // "{}" is a must

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get(); // from collection('posts'), with corresponding doc(id), "get()" that element
      console.log(res.data());

      if (!res.exists) {
        throw Error("That post does not exist.");
      }
      post.value = /*res.docs.map((post) => {
          console.log(post.data());
          return*/ {
        ...res.data(),
        id: res.id,
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

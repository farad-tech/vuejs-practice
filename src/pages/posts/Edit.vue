<template>
  <div class="container">
    <h1 class="my-3">Edit post</h1>
    <div class="row g-3 col-md-6">
      <FormPost v-if="!formLoading" @FormData="editPost" :buttonloading="loading" button-text="Edit Post"
        :post-data="post" />
      <div v-else>Loading ...</div>
    </div>
  </div>
</template>
<script>
import FormPost from '@/components/posts/Form.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  components: {
    FormPost,
  },
  setup() {
    const loading = ref(false);
    const formLoading = ref(true);
    const post = reactive({
      title: "",
      body: "",
    });
    const form = reactive({
      title: "",
      titleError: "",
      body: "",
      bodyError: "",
    });
    const route = useRoute();

    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.title = response.data.title;
          post.body = response.data.body;
          formLoading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPost();


    function editPost(form) {
      loading.value = true;
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: route.params.id,
        title: form.title,
        body: form.body,
        userId: 1,
      }).then(function () {
        loading.value = false;
        alert("Post edited successfully!")
      })
        .catch(function (error) {
          console.log(error);
        });
    }


    return { form, editPost, loading, post, formLoading }
  }
}
</script>
<style></style>
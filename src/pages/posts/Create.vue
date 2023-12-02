<template>
  <div class="container">
    <h1 class="my-3">Create post</h1>
    <div class="row g-3 col-md-6">
      <FormPost @FormData="createPost" :buttonloading="loading" button-text="Create Post"/>
    </div>
  </div>
</template>
<script>
import FormPost from '@/components/posts/Form.vue';
import axios from 'axios';
import { ref } from 'vue';
export default {
  components: {
    FormPost,
  },
  setup() {
    const loading = ref(false);

    function createPost(form) {
      loading.value = true;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
        userId: 1,
      }).then(function (response) {
        console.log(response.data)
        loading.value = false;
        alert("Post created successfully!")
      })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { createPost, loading }
  }
}
</script>
<style></style>
<template>
  <div class="container">
    <router-link class="btn btn-dark my-3" :to="{ name: 'postCreate' }">Create Post</router-link>
    <h1>Posts</h1>
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <CardView :post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import CardView from '@/components/posts/CardView.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    CardView
  },

  setup() {
    const posts = ref('Loading ...');
    const loading = ref(true);
    const route = useRoute();

    function getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPosts();
    return { posts, loading, route }
  },
}
</script>
<style>
</style>
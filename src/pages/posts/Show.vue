<template>
  <div class="container">
    <!-- <h1>User</h1> -->
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4">
        <CardView :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import CardView from '@/components/posts/CardView.vue'
import { useRoute } from "vue-router"

export default {
  components: {
    CardView
  },

  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPost();
    return { post, loading }
  },
}
</script>
<style></style>
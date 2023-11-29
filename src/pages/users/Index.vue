<template>
  <div class="container">
    <h1>Users</h1>
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <CardView :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import CardView from '@/components/users/CardView.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    CardView
  },

  setup() {
    const users = ref('Loading ...');
    const loading = ref(true);
    const route = useRoute();

    function getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { users, loading, route }
  },
}
</script>
<style></style>
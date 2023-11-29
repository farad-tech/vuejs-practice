<template>
  <div class="card w-100">
    <div class="card-header">
      <router-link :to="{ name : 'userId', params : {id: user.id} }">{{ user.name }}</router-link>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username: {{ user.username  }}</li>
      <li class="list-group-item">email: {{ user.email  }}</li>
      <li class="list-group-item">phone: {{ user.phone  }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    user:Object
  }
}
</script>
<style></style>
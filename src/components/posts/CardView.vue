<template>
  <div class="card w-100">
    <div class="card-header">
      <router-link :to="{ name : 'postId', params : {id: post.id} }">{{ post.title }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">author: <router-link :to="{ name : 'userId', params : {id: post.userId} }">{{ post.userId  }}</router-link></li>
      <li class="list-group-item">text: {{ post.body  }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    post:Object
  }
}
</script>
<style></style>
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a class="navbar-brand" href="#">Vue learn</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name : 'Header'
};
</script>

<style>
  .router-link-active {
    color: rgba(0, 0, 0, 0.9) !important;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
  }
</style>
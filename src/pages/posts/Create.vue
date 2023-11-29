<template>
  <div class="container">
    <h1 class="my-3">Create post</h1>
    <div class="row g-3 col-md-6">
      <form @submit.prevent="validate">

        <label>Title</label>
        <input class="form-control form-control-sm" v-model.lazy.trim="form.title">
        <div class="text-danger">{{ form.titleError }}</div>

        <label class="mt-3">Text</label>
        <textarea class="form-control form-control-sm" v-model.lazy.trim="form.body" rows="6"></textarea>
        <div class="text-danger">{{ form.bodyError }}</div>

        <div v-if="form.loading" class="btn btn-dark mt-4">
          <div class="spinner-border spinner-border-sm text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <button v-else class="btn btn-dark mt-4">Create</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { reactive } from 'vue';
export default {
  setup() {
    const form = reactive({
      title: "",
      titleError: "",
      body: "",
      bodyError: "",
      loading: false
    });

    function validate() {
      if (form.title === "") {
        form.titleError = "Title is required!";
      } else {
        form.titleError = "";
      }

      if (form.body === "") {
        form.bodyError = "Body is required!"
      } else {
        form.bodyError = "";
      }

      if (form.title !== "" && form.body !== "") {
        createPost()
      }
    }

    function createPost() {
      form.loading = true;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
        userId: 1,
      }).then(function (response) {
        console.log(response.data)
        form.loading = false;
        alert("Post created successfully!")
      })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { form, validate }
  }
}
</script>
<style></style>
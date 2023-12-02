<template>
  <div>
    <form @submit.prevent="validate">

      <label>Title</label>
      <input class="form-control form-control-sm" v-model.lazy.trim="form.title">
      <div class="text-danger">{{ form.titleError }}</div>

      <label class="mt-3">Text</label>
      <textarea class="form-control form-control-sm" v-model.lazy.trim="form.body" rows="6"></textarea>
      <div class="text-danger">{{ form.bodyError }}</div>

      <div v-if="buttonloading" class="btn btn-dark mt-4">
        <div class="spinner-border spinner-border-sm text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <button v-else class="btn btn-dark mt-4">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  props: {
    buttonloading: Boolean,
    buttonText: String,
    postData: Object
  },

  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleError: "",
      body: "",
      bodyError: "",
    });

    function setInput() {
      if (props.postData !== undefined) {
        form.title = props.postData.title;
        form.body = props.postData.body;
      }
    }

    setInput();

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
        emit('FormData', form)
      }
    }

    return { form, validate }
  }
}
</script>

<style></style>
<template>
  <button class="btn" :disabled="disabled">
    <span
      v-if="state === 'loading'"
      class="spinner-border spinner-border__sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span v-if="state !== 'loading'" v-html="text"></span>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    state: String,
    text: String,
    disabled: Boolean,
  },
};
</script>

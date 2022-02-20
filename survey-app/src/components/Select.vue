<template>
  <select class="text-field">
    <option v-for="option in options" :key="option.id" :value="option.value">
      {{ option.description }}
    </option>
  </select>
</template>
<script>
export default {
  name: "Select",
  props: {
    options: Array,
  },
};
</script>

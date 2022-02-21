<template>
  <select class="text-field" @change="change">
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
  methods: {
    change(evt) {
      this.$emit("change-option", evt.target.value);
    },
  },
};
</script>

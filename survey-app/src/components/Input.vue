<template>
  <input :type="type" class="text-field" :value="value" :placeholder="placeholder" />
</template>
<script>
export default {
  name: "Input",
  prop: {
    type: String,
    placeholder: String,
    value: String,
  },
};
</script>

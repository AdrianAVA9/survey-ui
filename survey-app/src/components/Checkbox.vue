<template>
  <label :for="checkboxId">
    <input type="checkbox" :name="name" :id="checkboxId" />
    {{ description }}
  </label>
</template>
<script>
import UniqueId from "@/Utils/UniqueId.js";
export default {
  name: "Checkbox",
  props: {
    description: String,
    name: String,
  },
  data() {
    return {
      checkboxId: UniqueId.generate(),
    };
  },
};
</script>

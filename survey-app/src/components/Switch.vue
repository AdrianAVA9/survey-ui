<template>
  <div class="switch-container">
    <div class="wrap-toggle">
      <input type="checkbox" class="offscreen" :id="elementId" />
      <label :for="elementId" class="switch"></label>
    </div>
    <span class="switch__description">{{ description }}</span>
  </div>
</template>
<script>
import UniqueId from "@/Utils/UniqueId.js";
export default {
  name: "Switch",
  beforeMount() {
    this.elementId = UniqueId.generate();
  },
  props: {
    description: String,
  },
  data() {
    return {
      elementId: -1,
    };
  },
};
</script>
<style scoped>
.switch-container {
  display: flex;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 28px;
  height: 14px;
  background-color: rgb(216, 209, 209);
  border-radius: 50px;
  cursor: pointer;
}
.switch::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: white;
  left: 1px;
  top: 2px;
  bottom: 1px;
  transition: 0.3s all;
}
input[type="checkbox"]:checked + .switch::after {
  transform: translateX(16px);
  background-color: white;
}
input[type="checkbox"]:checked + .switch {
  background-color: rgb(var(--green-700));
}
.offscreen {
  position: absolute;
  display: none;
}
.switch__description {
  font-size: 0.825rem;
  margin-left: 10px;
  padding-bottom: 2px;
}
</style>

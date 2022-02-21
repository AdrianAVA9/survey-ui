<template>
  <div>
    <label class="answers__label">Emoticones</label>
    <div class="answers">
      <Select class="text-field__sm" v-bind:options="emojis" />
      <Select class="text-field__sm" v-bind:options="emojis" />
    </div>
    <Button
      class="btn--primary-outline btn-ex-sm fw-600"
      v-bind:text="'+ Agregar'"
    />
  </div>
</template>
<script>
import Select from "@/components/Select";
import Button from "@/components/Button";

export default {
  name: "EmojiAnswer",
  components: {
    Select,
    Button
  },
  data() {
    return {
      /** Source: https://www.science.co.il/internet/html/Smileys.php **/
      emojis: [
        {
          id: "1",
          value: "😁",
          description: "😁 Feliz",
        },
        {
          id: "2",
          value: "😁",
          description: "😴 Durmiendo",
        },
        {
          id: "3",
          value: "😱",
          description: "😱 Asustado",
        },
        {
          id: "4",
          value: "😭",
          description: "😭 Llorando",
        },
        {
          id: "5",
          value: "😤",
          description: "😤 Enojado",
        },
      ],
    };
  },
};
</script>
<style scoped>
.answers__label {
  display: block;
  text-transform: uppercase;
  margin-bottom: var(--gap-2);
}
.answers > * {
  margin-bottom: var(--gap-2);
}
</style>

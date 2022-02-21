<template>
  <div>
    <label class="answers__label">Opciones</label>
    <div class="answers">
      <Answer
        class=""
        v-for="answer in answers"
        :key="answer.id"
        v-bind:answer="answer"
      />
    </div>
    <Button class="btn--primary-outline btn-ex-sm fw-600" v-bind:text="'+ Agregar'" />
  </div>
</template>
<script>
import Answer from "@/components/Answer";
import UniqueId from "@/Utils/UniqueId.js";
import Button from "@/components/Button";

export default {
  name: "OptionAnswer",
  components: {
    Answer,
    Button,
  },
  data() {
    return {
      answers: [
        {
          id: UniqueId.generate(),
          number: 1,
          value: "",
        },
        {
          id: UniqueId.generate(),
          number: 2,
          value: "",
        },
        {
          id: UniqueId.generate(),
          number: 3,
          value: "",
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

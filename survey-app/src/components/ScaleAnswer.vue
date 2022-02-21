<template>
  <div>
    <label class="answers__label">Escala</label>
    <div class="answers">
      <Answer
        v-slot="scope"
        v-for="answer in answers"
        :key="answer.id"
        v-bind:answer="answer"
        v-on:update-answer="updateAnswer"
      >
        <Input
          class="text-field__sm"
          :value="answer.value"
          :placeholder="'Digite una respuesta'"
          @input="scope.change"
        />
      </Answer>
    </div>
  </div>
</template>
<script>
import Answer from "@/components/Answer";
import Input from "@/components/Input";
import UniqueId from "@/Utils/UniqueId.js";

export default {
  name: "ScaleAnswer",
  components: {
    Answer,
    Input
  },
  data() {
    return {
      answers: [
        {
          id: UniqueId.generate(),
          number: 1,
          value: "Excelente",
        },
        {
          id: UniqueId.generate(),
          number: 2,
          value: "Bueno",
        },
        {
          id: UniqueId.generate(),
          number: 3,
          value: "Razonable",
        },
        {
          id: UniqueId.generate(),
          number: 4,
          value: "Pobre",
        },
        {
          id: UniqueId.generate(),
          number: 5,
          value: "No puede ser evaluado",
        },
      ],
    };
  },
  methods: {
    updateAnswer: function (answer) {
      let existingAnswer = this.answers.find((a) => a.id === answer.id);
      if (!existingAnswer) return;

      existingAnswer.value = answer.value;
      this.emitUpdate();
    },
    emitUpdate: function () {
      this.$emit(
        "update-answers",
        this.answers.filter((a) => a.value.length > 0)
      );
    },
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

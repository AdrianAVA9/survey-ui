<template>
  <div>
    <label class="answers__label">Emoticones</label>
    <div class="answers">
      <Answer
        v-slot="scope"
        v-for="answer in answers"
        :key="answer.id"
        v-bind:answer="answer"
        v-bind:canRemove="canRemove"
        v-on:update-answer="updateAnswer"
        v-on:delete-answer="deleteAnswer"
      >
        <Select
          class="text-field__sm"
          v-bind:options="emojis"
          @change="scope.change"
        />
      </Answer>
    </div>
    <Button
      class="btn--primary-outline btn-ex-sm fw-600"
      v-bind:text="'+ Agregar opción'"
      @click="addAnswer"
    />
  </div>
</template>
<script>
import Answer from "@/components/Answer";
import Select from "@/components/Select";
import Button from "@/components/Button";
import UniqueId from "@/Utils/UniqueId.js";

export default {
  name: "EmojiAnswer",
  components: {
    Answer,
    Select,
    Button,
  },
  beforeMount() {
    for (let index = 1; index <= 3; index++) this.addAnswer();
  },
  data() {
    return {
      canRemove: true,
      counter: 1,
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
      answers: [],
    };
  },
  methods: {
    updateAnswer: function (answer) {
      let existingAnswer = this.answers.find((a) => a.id === answer.id);
      if (!existingAnswer) return;

      existingAnswer.value = answer.value;
      this.emitUpdate();
    },
    deleteAnswer: function (answer) {
      this.answers = this.answers.filter((a) => a.id !== answer.id);
      this.resetAnswerQuestion();
      this.emitUpdate();
    },
    addAnswer: function () {
      this.answers.push({
        id: UniqueId.generate(),
        number: this.counter,
        value: "😁",
      });

      this.counter++;
    },
    resetAnswerQuestion() {
      this.counter = 1;
      this.answers.forEach((answer) => {
        answer.number = this.counter;
        this.counter++;
      });
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

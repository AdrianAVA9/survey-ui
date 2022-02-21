<template>
  <div class="form">
    <div class="form-group">
      <Input
        ref="questionTitle"
        :type="'text'"
        :placeholder="'Ingrese la pregunta'"
        class="text-field__sm"
      />
      <Select
        class="text-field__sm"
        v-bind:options="answersType"
        v-on:change-option="changeAnswer"
      />
    </div>
    <div class="answers__options">
      <Switch
        v-if="selectedAnswer === 'option'"
        v-bind:description="'Selección multiple'"
      />
      <Switch v-bind:description="'Requerida'" />
      <Switch
        v-if="selectedAnswer !== 'star'"
        v-bind:description="'Otra opción'"
      />
    </div>
    <div class="answer__container">
      <component
        :is="selectedAnswer"
        v-on:update-answers="updateAnswers"
      ></component>
    </div>
    <hr class="spacer mb-2 mt-2" />
    <Button
      class="btn btn-sm btn--primary float-right"
      v-bind:text="'Agregar'"
      @click="addQuestion"
    />
  </div>
</template>
<script>
import Input from "@/components/Input";
import Select from "@/components/Select";
import Switch from "@/components/Switch";
import TextAnswer from "@/components/TextAnswer";
import OptionAnswer from "@/components/OptionAnswer";
import ScaleAnswer from "@/components/ScaleAnswer";
import StarAnswer from "@/components/StarAnswer";
import EmojiAnswer from "@/components/EmojiAnswer";
import Button from "@/components/Button";

export default {
  name: "SurveyForm",
  components: {
    Input,
    Select,
    Switch,
    text: TextAnswer,
    option: OptionAnswer,
    scale: ScaleAnswer,
    star: StarAnswer,
    emoji: EmojiAnswer,
    Button,
  },
  data() {
    return {
      selectedAnswer: "option",
      answersType: [
        {
          id: "-1",
          value: "",
          description: "-- Selecione el tipo de respuesta --",
        },
        {
          id: "1",
          value: "emoji",
          description: "Emoticones",
        },
        {
          id: "2",
          value: "star",
          description: "Estrellas",
        },
        {
          id: "3",
          value: "scale",
          description: "Escala",
        },
        {
          id: "4",
          value: "option",
          description: "Opciones",
        },
        {
          id: "5",
          value: "text",
          description: "Escrita",
        },
      ],
      question: {
        title: "",
        unique: false,
        required: false,
        optionalAnswer: false,
        type: "option",
        answers: [],
      },
    };
  },
  methods: {
    updateAnswers: function (answers) {
      this.question.answers = answers;
    },
    changeAnswer: function (type) {
      this.question.type = type;
      this.question.answers = [];
      this.selectedAnswer = type;
    },
    addQuestion: function () {
      this.question.title = this.$refs.questionTitle.$el.value;
      /** Falta validar la información antes de mostrarlo en el preview **/
      this.$emit("add-question", this.question);
    },
  },
};
</script>
<style scoped>
.form {
  width: 100%;
  padding: var(--gap-2);
  border-left: 4px solid rgb(var(--green-700));
  border-radius: 0.25rem;
  background-color: rgb(var(--white));
}
.answers__options,
.answer__container {
  margin-top: var(--gap-2);
}
</style>

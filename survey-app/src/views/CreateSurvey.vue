<template>
  <div class="form__layout">
    <SurveyForm v-on:add-question="addNewQuestion" />
    <SurveyPreview v-bind:questions="questions" v-on:delete-question="deleteQuestion" />
  </div>
</template>

<script>
import SurveyForm from "@/components/SurveyForm.vue";
import SurveyPreview from "@/components/SurveyPreview.vue";
import UniqueId from "@/Utils/UniqueId.js";

export default {
  name: "CreateSurvey",
  components: {
    SurveyForm,
    SurveyPreview,
  },
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    addNewQuestion: function (question) {
      let newQuestion = Object.assign({}, question);
      newQuestion.id = UniqueId.generate();
      this.questions.push(newQuestion);
    },
    deleteQuestion: function (question) {
      this.questions = this.questions.filter((q) => q.id !== question.id);
    },
  },
};
</script>

<style scoped>
.form__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--gap-1);
}
</style>

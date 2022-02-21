<template>
  <div class="preview__container">
    <div
      v-for="question in questions"
      :key="question.id"
      class="question__card"
    >
      <div class="question__header">
        <h5 class="question__title">{{ question.title }}</h5>
        <div class="question__actions">
          <Button class="btn btn-sm" v-bind:text="upIcon" />
          <Button class="btn btn-sm" v-bind:text="downIcon" />
          <Button class="btn btn-sm" v-bind:text="editIcon" />
          <Button
            class="btn btn-sm"
            v-bind:text="deleteIcon"
            @click="deleteQuestion(question.id)"
          />
        </div>
      </div>
      <div class="question__body">
        <OptionQuestionPreview v-bind:answers="question.answers" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import OptionQuestionPreview from "@/components/OptionQuestionPreview";
export default {
  name: "SurveyPreview",
  components: {
    Button,
    OptionQuestionPreview,
  },
  props: {
    questions: Array,
  },
  data() {
    return {
      upIcon: '<i class="fas fa-arrow-up"></i>',
      downIcon: '<i class="fas fa-arrow-down"></i>',
      editIcon: '<i class="fas fa-pen"></i>',
      deleteIcon: '<i class="fas fa-trash-alt"></i>',
    };
  },
  methods: {
    deleteQuestion: function (questionId) {
      this.$emit("delete-question", { id: questionId });
    },
  },
};
</script>
<style scoped>
.preview__container {
  padding: 0 var(--gap-2);
}
</style>

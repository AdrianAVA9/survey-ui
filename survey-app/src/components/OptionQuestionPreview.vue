<template>
  <div class="answers">
    <Checkbox
      v-for="answer in answers"
      :key="answer.id"
      v-bind:description="answer.value"
      v-bind:name="answerName"
    />
  </div>
</template>
<script>
import Checkbox from "@/components/Checkbox";
import UniqueId from "@/Utils/UniqueId.js";
export default {
  name: "OptionQuestionPreview",
  components: {
    Checkbox,
  },
  props: {
    answers: Array,
  },
  data() {
    return {
      answerName: UniqueId.generate(),
    };
  },
};
</script>
<style scoped>
.answers > * {
  display: block;
  padding-bottom: var(--gap-1);
}
</style>

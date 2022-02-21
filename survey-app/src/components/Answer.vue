<template>
  <div class="answer">
    <span class="answer__number">{{ answer.number }}</span>
    <slot :change="editAnswer"></slot>
    <Button
      v-if="canRemove"
      class="btn--default btn-sm"
      v-bind:text="icon"
      @click="deleteAnswer"
    />
  </div>
</template>
<script>
//import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "Answer",
  components: {
    /* Input, */
    Button,
  },
  props: {
    answer: Object,
    canRemove: Boolean,
  },
  data() {
    return {
      icon: '<i class="fas fa-times"></i>',
    };
  },
  methods: {
    deleteAnswer: function () {
      this.$emit("delete-answer", {
        id: this.answer.id,
      });
    },
    editAnswer: function (evt) {
      this.$emit("update-answer", {
        id: this.answer.id,
        value: evt.target.value,
      });
    },
  },
};
</script>
<style scoped>
.answer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.answer > *:last-child {
  margin-left: var(--gap-2);
}
.answer > *:first-child {
  margin-right: var(--gap-2);
}
.answer__number {
  width: 10px;
  font-size: 0.825rem;
  font-weight: 600;
}
</style>

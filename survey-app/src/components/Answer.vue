<template>
  <div class="answer">
    <span class="answer__number">{{ answer.number }}</span>
    <Input class="text-field__sm" :value="answer.value" :placeholder="'Digite una respuesta'" />
    <Button class="btn--default btn-sm" v-bind:text="icon" />
  </div>
</template>
<script>
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "Answer",
  components: {
    Input,
    Button,
  },
  props: {
    answer: Object,
  },
  data() {
    return {
      icon: '<i class="fas fa-times"></i>',
    };
  },
};
</script>
<style scoped>
.answer{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.answer > *:not(:last-child){
    margin-right: var(--gap-2);
}
.answer__number{
    width: 10px;
    font-size: .825rem;
    font-weight: 600;
}
</style>

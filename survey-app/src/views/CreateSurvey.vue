<template>
  <div>
    <SurveyForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SurveyForm from '@/components/SurveyForm.vue'

export default {
  name: 'CreateSurvey',
  components: {
    SurveyForm
  }
}
</script>

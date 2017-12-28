<template>
  <form @submit.prevent="submit">
    <div class="container">

      <div class="row">
        <q-input ref="amount" type="number" v-model="expense.amount" placeholder="R$"/>
      </div>

      <div class="row">
        <q-input type="text" v-model="expense.description" placeholder="Descrição"/>
      </div>

      <div class="row">
        <q-input type="date" v-model="expense.date" />
      </div>

      <div class="row">
        <q-btn color="primary">
          <q-icon name="map" />
        </q-btn>
      </div>
    </div>
  </form>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('YYYY-MM-DD')
      }
    }
  },
  methods: {
    submit () {
      console.log('peguei o form')
      // clonando o objeto para nao dar conflito
      const cloned = JSON.parse(JSON.stringify(this.expense))
      // enviando para o vuex, no store, atraves de commits
      this.$store.commit('add_expense', cloned)
      this.reset()
    },
    reset () {
      this.expense.amount = ''
      this.expense.description = ''
      this.expense.date = moment().format('YYYY-MM-DD')
      this.$refs.amount.focus()
    }
  }
}
</script>

<style scoped>
  .container{
    padding: 20px;
  }
</style>

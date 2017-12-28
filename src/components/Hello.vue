<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>
    <cc-Form></cc-Form>

  </q-layout>
</template>

<script>
import ccForm from './expenses/form.vue'
export default {
  name: 'index',
  components: {
    ccForm
  }
}
</script>

<style lang="stylus">

</style>

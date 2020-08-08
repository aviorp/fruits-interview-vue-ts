<template>
  <app-layout></app-layout>
</template>

<script lang='ts'>
import {Component , Vue} from 'vue-property-decorator';
import appLayout from './layout/Layout.vue';
@Component({
  components: {
    appLayout
  }
})
export default class App extends Vue {
   created(){
    this.$store.dispatch('useSetInitialFruits');
  }
}
</script>



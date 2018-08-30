<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Button ref="gg" type="primary" shape="circle" icon="ios-search" @click="fff">88888</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'iview';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  protected fff() {
    const btn = this.$refs.gg as Button;
    btn.type = 'warning';
  }
}
</script>

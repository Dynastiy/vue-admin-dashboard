<template>
<div id="layout-wrapper app"> 
      <router-view></router-view>
      
</div>
</template>

<script>
import themeChanger from './js/theme'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      themeChanger: null,
    }
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
  },
  created() {
    this.themeChanger = new themeChanger();
  },
};
</script>

<style>

</style>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import logo from "@/assets/logo.png";

@Component({
  name: 'Navbar',
})
export default class Navbar extends Vue {
  private logo: any = logo;
}
</script>

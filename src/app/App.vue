<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navbar from '@/components/navbar/Navbar.vue';
import TodoAdd from '@/components/todo-add/TodoAdd.vue';
import TodoItem from '@/components/todo-item/TodoItem.vue';
import TodoList from '@/components/todo-list/TodoList.vue';
import Footer from '@/components/footer/Footer.vue';

@Component({
  components: {
    Navbar,
    TodoAdd,
    TodoItem,
    TodoList,
    Footer,
  },
})
export default class App extends Vue {
  private editing: boolean = false;

  private toggleEditing(): void {
    this.editing = !this.editing;
  }
}
</script>

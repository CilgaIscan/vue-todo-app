<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {ToDo} from '@/todo.model';

@Component({
  components: {},
})
export default class App extends Vue {
  private todos: ToDo[] = [
      new ToDo(1, 'To do 1', false),
      new ToDo(2, 'To do 2', true),
      new ToDo(3, 'To do 3', false),
      new ToDo(4, 'To do 4', false),
  ];

  private editing: boolean = false;
  private toggleEditing(): void {
    this.editing = !this.editing;
  }
  private deleteTodo(todo: ToDo): void {
    const todoIndex = this.todos.findIndex((item) => item.id === todo.id);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
</script>

<template src="./template.html"></template>
<style src="./style.scss" lang="scss" ></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Todo} from '@/model';

@Component({
  name: 'TodoAdd',
})
export default class TodoAdd extends Vue {
  private inputRules: Array<(value: string) => string | boolean> = [
    (value: string) => !!value || 'Description is required',
  ];

  private newTodoDescription: string = '';

  private saveTodo(): void {
    const description: string = this.newTodoDescription.trim();
    if (!description) {
      alert('Todo description cannot be empty!');
      return;
    }
    const newTodo: Todo = new Todo(Math.random(), description);
    // this.todos.push(newTodo);
    this.newTodoDescription = '';
  }
}
</script>


<template src="./template.html"></template>
<style src="./style.scss" lang="scss"></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TodoItem from '@/components/todo-item/TodoItem.vue';
import {Todo} from '@/model';

@Component({
  name: 'TodoList',
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  private todos: Todo[] = [];
  public mounted(): void {
    this.todos = [
      new Todo(1, 'To do 1', false),
      new Todo(2, 'To do 2', true),
      new Todo(3, 'To do 3', false),
      new Todo(4, 'To do 4', false),
    ];
  }

  private deleteTodo(todo: Todo): void {
    const todoIndex = this.todos.findIndex((item) => item.id === todo.id);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
</script>

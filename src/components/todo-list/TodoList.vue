<template src="./template.html"></template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TodoItem from '@/components/todo-item/TodoItem.vue';
import {Todo} from '@/model';
import {todoQuery} from '@/queries';

@Component({
  name: 'TodoList',
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  private todos: Todo[] = [];
  private editing: boolean = false;

  private async mounted() {
    await this.getTodos();
  }

  private async getTodos(): Promise<void> {
    const resp = await this.$apollo.query({query: todoQuery});
    this.todos = resp.data.todos;
  }

  private async refreshTodos() {
    await this.getTodos();
  }
}
</script>

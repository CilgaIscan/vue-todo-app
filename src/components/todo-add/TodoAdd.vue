<template src="./template.html"></template>
<style src="./style.scss" lang="scss" ></style>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Todo} from '@/model';
import {todoInsert} from '@/queries';

@Component({
  name: 'TodoAdd',
})
export default class TodoAdd extends Vue {
  private inputRules: Array<(value: string) => string | boolean> = [
    (value: string) => !!value || 'Description is required',
  ];

  private newTodoDescription: string = '';

  private async saveTodo(): Promise<void> {
    const description: string = this.newTodoDescription.trim();
    if (!description) {
      alert('Todo description cannot be empty!');
      return;
    }
    const newTodo: Todo = new Todo(Math.random(), description);
    await this.$apollo.mutate({
      mutation: todoInsert,
      variables: {
        description,
      },
    });
    window.location.reload();
  }
}
</script>


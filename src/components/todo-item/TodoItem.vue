<template src="./template.html"></template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import { Todo } from '@/model';
import {todoDelete, todoQuery, todoUpdate} from '@/queries';

@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  @Prop() private todo?: Todo;
  @Prop() private isInEditMode?: boolean;

  private async remove() {
    const resp = await this.$apollo.mutate({
      mutation: todoDelete,
      variables: {
        todoId: this.todo?.id,
      },
      update: (cache, { data: { delete_todos } }) => {
        // Read the data from our cache for this query.
        if (delete_todos.affected_rows) {
          const data = cache.readQuery({
            query: todoQuery,
          });
          if (data) {
            data.todos = data.todos.filter((todo: Todo) => todo.id !== this.todo?.id);
            cache.writeQuery({
              query: todoQuery,
              data,
            });
            this.$emit('refresh-todos');
          }
        }
      },
    });
  }

  private async toggleStatus() {
    if (this.todo) {
      this.todo.isDone = !this.todo.isDone;
      const resp = await this.$apollo.mutate({
        mutation: todoUpdate,
        variables: {
          todoId: this.todo.id,
          description: this.todo.description,
          isDone: this.todo.isDone,
        },
      });
    }
  }
}
</script>

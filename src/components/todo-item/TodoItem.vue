<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import { Todo } from '@/model';
import {todoDelete, todoQuery} from '@/queries';

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
        // eslint-disable-next-line
        console.log(delete_todos);
        if (delete_todos.affected_rows) {
          const data = cache.readQuery({
            query: todoQuery
          });
          data.todos = data.todos.filter(todo => todo.id !== this.todo?.id);
          cache.writeQuery({
            query: todoQuery,
            data
          });
          this.$emit('refresh-todos');
        }
      },
    });
  }
}
</script>

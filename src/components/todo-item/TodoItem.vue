<template src="./template.html"></template>
<style src="./style.scss" lang="scss" scoped></style>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import { Todo } from '@/model';

@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  @Prop() private todo?: Todo;
  @Prop() private isInEditMode?: boolean;

  private remove() {
    this.$emit('remove-todo', this.todo);
  }
}
</script>

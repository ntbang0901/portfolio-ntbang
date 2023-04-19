<template>
  <div :class="['todo-item', todoProps.completed ? 'is-completed' : '']" :id="todoProps.id">
    <div>
      <input type="checkbox" :checked="todoProps.completed" @change="markCompleted(todoProps.id)" />
      <span>{{ todoProps.title }}</span>
    </div>

    <div class="left">
      <button class="completed" v-if="todoProps.completed">completed</button>
      <button class="btn-del" @click="deleteTodo(todoProps.id)">Delete</button>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todoProps'],
  methods: {
    ...mapMutations({
      markCompleted: 'MARK_COMPLETED'
    }),
    ...mapActions(["deleteTodo"])
  }

}
</script>

<style scoped>
.todo {}

.todo-item {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px dotted #ccc;
}

.btn-del {
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}

.left {}

.completed {
  color: green
}

.is-completed {
  text-decoration: line-through;
}
</style>

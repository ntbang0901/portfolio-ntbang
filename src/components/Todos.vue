<template>
  <AddTodo />
  <div v-if="auth.isAuthenticated">
    <TodoItem v-for="todo in todos.todos" :key="todo.id" :todoProps="todo" />
  </div>
  <p v-else>Not Authorised</p>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'
export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  computed: mapState(['todos', 'auth']),
  created() {
    this.getTodos()
  },
  methods: {
    ...mapActions(['getTodos'])
  }

}
</script>

<style></style>

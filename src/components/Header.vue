<template>
  <header class="header">
    <h1>Việc cần làm</h1>
    <div v-if="auth.isAuthenticated">
      <h2> TotalTodos:: {{ todos.todos.length }}</h2>
      <h2>Progress:: {{ progress }}%</h2>
    </div>

    <button v-if="auth.isAuthenticated" @click="loginOrLogout">Logout</button>
    <button v-else @click="loginOrLogout">Login</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'HeaderBar',
  computed: {
    ...mapState(["auth", "todos"]),
    ...mapGetters(['doneTodos', 'progress']),
  },
  methods: {
    ...mapMutations({
      loginOrLogout: "TOGGLE_AUTH"
    })
  }

}
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>

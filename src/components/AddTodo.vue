<template>
  <form @submit="onsubmit">
    <input type="text" placeholder="New todo" v-model="title" @input="check" />
    <input class="add-btn" type="submit" value="ADD" />
  </form>
</template>
<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid'


export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {

    ...mapActions(['addTodo']),
    onsubmit(event) {
      event.preventDefault();
      if (!this.title) return
      this.addTodo({
        id: uuidv4(),
        title: this.title,
        completed: false
      })
      this.title = ''
    }
  }

}
</script>
<style>
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 5px;
}

input[type='submit'] {
  flex: 2;
}

.add-btn {}
</style>

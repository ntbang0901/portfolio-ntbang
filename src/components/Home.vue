<template>
    <HeaderBar />
    <Todos />
</template>
<script>

import HeaderBar from './Header.vue';
import Todos from './Todos.vue';

export default {
    name: "Home",
    components: { HeaderBar, Todos, }
}
</script>
<style></style>
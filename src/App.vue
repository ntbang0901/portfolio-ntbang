<template>
  <main>
    <Sidebar />
    <div class="main-content">
      <NavBar />
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </main>
</template>
<script>
import Sidebar from './components/Sidebar.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { Sidebar, NavBar }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;900&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  color: #fff;
}

body {
  background-color: #121212;
}



article {
  padding: 20px;
}

main {
  transition: 0.5s ease-in-out;

}

.title {
  position: relative;
  padding-bottom: 10px;
  font-size: 35px;
  margin-top: 0;
  margin-bottom: 20px;

}

.title::after {
  content: "";
  position: absolute;
  width: 40px;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: rgb(82, 203, 250);
}



/* .main-content::-webkit-scrollbar {
  display: none;
} */

.main-content::-webkit-scrollbar {
  width: 20px;
}

.main-content {
  background-color: #252627
}


.main-content::-webkit-scrollbar-thumb {
  border: 5px solid var(--smoky-black);
  background: hsla(0, 0%, 100%, 0.1);
  border-radius: 20px;
  box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.11), inset -1px -1px 0 hsla(0, 0%, 100%, 0.11);
}

@media screen and (max-width: 1250px) {
  .main-content {
    width: 990px;
    position: relative;
    margin: auto;
    margin-top: 30px;
    border-radius: 20px;
  }

}

@media screen and (min-width: 1250px) {
  .main-content {
    min-width: 75%;
    width: 75%;
    margin: 0;
    overflow-y: auto;
  }

  main {
    max-width: 1200px;
    height: 800px;
    overflow: hidden;
    margin-inline: auto;
    display: flex !important;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
    margin-top: 60px;
  }

}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
  opacity: 1;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

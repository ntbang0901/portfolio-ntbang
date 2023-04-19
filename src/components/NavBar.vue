<template>
    <nav>
        <ul class="nav-link">
            <li class="nav-link--item">
                <router-link :to="{ name: 'home' }">ABOUT</router-link>
            </li>
            <li class="nav-link--item">
                <router-link :to="{ name: 'resume' }">RESUME</router-link>
            </li>
            <li class="nav-link--item">
                <router-link :to="{ name: 'portfolio' }">PORTFOLIO</router-link>
            </li>
            <li class="nav-link--item">
                <router-link :to="{ name: 'contact' }">CONTACT</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style scoped>
nav {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    /* required */
    z-index: 99;
    background-color: #3e3e3e;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-radius: 20px;

}

.router-link-active {
    color: rgb(82, 203, 250) !important;
}

nav ul.nav-link {

    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;

}



nav ul.nav-link a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s;

}

nav ul.nav-link a:hover {
    color: rgb(82, 203, 250);
    transition: all 0.3s;
}
</style>
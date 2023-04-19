<template>
    <aside class="sidebar">
        <div class="info">
            <figure class="avatar-box">
                <img src="../assets/bear.png" alt="avatar" width="120" />
            </figure>
            <div class="info-content">
                <h2 class="name">Nguyễn Thành Băng</h2>
                <p class="title-info">Frontend Developer</p>
            </div>
            <div class="social-list">
                <a href="https://www.facebook.com/nguyenthanhbang0901/" target="_blank">
                    <v-icon icon="mdi-facebook" size="large" color="#e3e3e3" />
                </a>
                <a href="https://www.linkedin.com/in/nguyenthanhbang/" target="_blank">
                    <v-icon icon="mdi-linkedin" size="large" color="#e3e3e3" />
                </a>
                <a href="https://github.com/ntbang0901" target="_blank">
                    <v-icon icon="mdi-github" size="large" color="#e3e3e3" />
                </a>
            </div>
        </div>
        <div class="info_more">
            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon">
                        <v-icon icon="mdi-email" size="large" color="orange" />
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">EMAIL</p>
                        <a href="mailto:ntbang0901@gmail.com" class="contact-link">ntbang0901@gmail.com</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon">
                        <v-icon icon="mdi-phone" size="large" color="orange" />
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">PHONE</p>
                        <a href="tel:ntbang0901@gmail.com" class="contact-link">0962948752</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon">
                        <v-icon icon="mdi-map-marker" size="large" color="orange" />
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">LOCATION</p>
                        <address>QUẬN 9, TPHCM</address>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon">
                        <v-icon icon="mdi-calendar-range" size="large" color="orange" />
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">BIRTHDAY</p>
                        <time>09/01/2001</time>
                    </div>
                </li>
            </ul>
        </div>

    </aside>
</template>
<script>
export default {
    name: "Sidebar"
}
</script>
<style >
.sidebar {
    background-color: #252627;
    border-radius: 20px;

}

@media screen and (max-width: 1250px) {
    .sidebar {
        width: 990px;
        border-radius: 20px;
        margin: auto;
        padding: 50px 30px;
        display: flex;
        flex: 1;
    }

    .info {
        padding-bottom: 50px;
    }

    .info_more {
        display: flex;
        flex: 1;
        justify-content: center;
    }

    .contacts-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: start;
        align-items: center;
        column-gap: 100px;
    }


}

@media screen and (min-width: 1250px) {
    .sidebar {
        max-height: max-content;
        height: 100%;
        margin-top: 0;
        margin-bottom: 0;
        padding: 60px 30px 30px;
        z-index: 1;
        display: block;
    }

    .info_more {
        display: block;
    }
}


.avatar-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.name {
    white-space: nowrap;
    text-align: center;
}

.title-info {
    margin: auto;
    width: max-content;
    font-size: 14px;
    background-color: #3e3e3e;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.contact-title {
    color: #d6d6d6b3;
}

.contact-link {
    text-decoration: none;
    color: #fff;
}

.social-list {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.social-list a {
    transition: 0.2s all;
    text-decoration: none;

}

.social-list a:hover {
    opacity: 0.8;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}
</style>
<template>
    <div>
        <article class="portfolio">
            <header>
                <h2 class="title">Portfolio</h2>
            </header>
            <div class="project-list">
                <ProjectItem v-for="project in projects" :key="project.id" :projectProps="project" />
            </div>
        </article>
    </div>
</template>
<script>
import { ref } from 'vue';
import ProjectItem from './ProjectItem.vue';
import ecommerce from "../assets/ecommerce.png"
import QLBHX from "../assets/quan_ly_bao_hanh_xe.png"

export default {
    name: 'Portfolio',
    components: { ProjectItem },
    setup() {
        const projects = ref([
            {
                id: self.crypto.randomUUID(),
                title: "REDDIT",
                detail: "Nextjs,Graphql,PostgreSQL,formik,Chakra-ui,apollo,...",
                image: "https://www.howtogeek.com/wp-content/uploads/2021/07/Reddit-Logo-Cover.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
                href: "https://github.com/ntbang0901/reddit",
                link: "https://reddit-eta-ten.vercel.app/"
            },
            {
                id: self.crypto.randomUUID(),
                title: "Movie-App",
                detail: "Nextjs,Firebase,The Movie Database (TMDB),MUI,styled-components,...",
                image: "https://www.disneystudiolicensing.com/app/themes/DF_960/files/includes/index_page_hero.jpg",
                href: "https://github.com/ntbang0901/Movie-app",
                link: "https://movie-app-seven-plum.vercel.app/"
            },
            {
                id: self.crypto.randomUUID(),
                title: "Book Store",
                detail: "ReactJs,Bootstrap,Redux,...",
                image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/323538550_638798981268095_8616948785819840780_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EOyp3SOR71cAX8iFo6L&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQafVgcyG6Rl4jjxBaiqteYW5B5JkJYlrTnu7lPoNkeaQ&oe=6449FB27",
                href: "https://github.com/ntbang0901/book-store-reactjs",
            },
            {
                id: self.crypto.randomUUID(),
                title: "E-commerce",
                detail: "ReactJs,taildwindcss,react-query,..",
                image: ecommerce,
                href: "https://github.com/ntbang0901/ecommerce-reactjs",
            },
            {
                id: self.crypto.randomUUID(),
                title: "Chat-app",
                detail: "NextJs,Firebase,styled-components,..",
                image: "https://cdn.tgdd.vn/Files/2021/04/23/1345590/whatsapp-la-gi-uu-diem-va-cac-tinh-nang-noi-bat-c-8.jpg",
                href: "https://github.com/ntbang0901/chat-app",
                link: "https://chat-app-seven-beta.vercel.app/"
            },
            {
                id: self.crypto.randomUUID(),
                title: "Quản lý bảo hành xe máy",
                detail: "SpringBoot, Thymeleaf, JPA",
                image: QLBHX,
                href: "https://github.com/ntbang0901/quan_ly_bao_hanh_xe",
            },

        ])

        // expose to template and other options API hooks
        return {
            projects
        }
    },
}
</script>
<style scoped lang="css">
p {
    margin: 0;
}

.project-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 20px;
}

.project-item {
    width: 260px;
}

.project-info {
    padding: 8px
}

.project-image {
    height: 260px;
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    transition: 0.25s ease;
}

.project-info__title {
    font-size: 20px;
}

.project-info__detail {
    color: #d6d6d6;
}
</style>
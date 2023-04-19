<template>
    <article class="resume">
        <header>
            <h2 class="title">Resume</h2>
        </header>
        <section>
            <div>
                <div class="title-wrapper d-flex align-center">
                    <div class="icon">
                        <v-icon icon="mdi-school-outline" size="large" color="orange" />
                    </div>
                    <h3>Education</h3>
                </div>
                <div class="timeline d-flex">
                    <div class="icon">
                        <v-icon icon="mdi-timeline" size="medium" color="orange" />
                    </div>
                    <div class="info-timeline">
                        <h3>Posts And Telecommunications Institute Of Technology HCMC</h3>
                        <span>2019-Present</span>
                        <p>My major: Information Security.</p>
                    </div>
                </div>
            </div>


        </section>
        <section>
            <div class="my-skill">
                <div class="title-wrapper d-flex align-center">
                    <div class="icon">
                        <v-icon icon="mdi-xml" size="large" color="orange" />
                    </div>
                    <h3>My Skill</h3>
                </div>
                <div class="skill ml-10">
                    <div class="front-end mt-5 mb-10">
                        <h3>FRONTEND</h3>
                        <div class="list-skill mb-3 d-flex">
                            <h4>Language: </h4>
                            <span class="text"> Javascript, Typescript, HTML/CSS</span>
                        </div>
                        <div class="list-skill  mb-3 d-flex">
                            <h4>Framework: </h4>
                            <span class="text"> VueJs, NextJs</span>
                        </div>
                        <div class="list-skill d-flex">
                            <h4>Library:</h4>
                            <span class="text"> ReactJS, Redux, Redux-Toolkit, Tailwindcss, Bootstrap, Antd and Others
                                Lib</span>
                        </div>
                    </div>
                    <div class="back-end">
                        <h3>BACKEND</h3>
                        <div class="list-skill mb-3 d-flex">
                            <h4>Language: </h4>
                            <span class="text"> Java, ASP.NET, NodeJs</span>
                        </div>
                        <div class="list-skill mb-3 d-flex">
                            <h4>Framework:</h4>
                            <span class="text"> ExpressJs, Spring boot</span>
                        </div>
                        <div class="list-skill d-flex">
                            <h4>ORM:</h4>
                            <span class="text"> TypeORM, Prisma, JPA</span>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    </article>
</template>
<script>
export default {

}
</script>
<style>
.title-wrapper,
.timeline {
    gap: 14px;
}

.timeline {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.info-timeline span {
    color: #d6d6d6;
}

.title-wrapper h3 {
    font-size: 25px;
}

.text {
    margin-left: 5px;
    color: orange;
}
</style>
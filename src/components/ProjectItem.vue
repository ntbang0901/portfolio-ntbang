<template>
    <v-card color="#3e3e3e" theme="info" class="mx-auto rounded-lg" max-width="260" height="420">
        <v-img class="text-white" height="260" width="260" :src="projectProps.image" cover />
        <v-card-text class="text-white">
            <div class="text-overline mb-1">
                {{ projectProps.title }}
            </div>
            <div class="text-caption">{{ projectProps.detail }}</div>
        </v-card-text>

        <v-card-actions>

            <v-btn v-if="projectProps.link" :href="projectProps.link" target="_blank" color="orange">
                <div class="d-flex align-center justify-center">
                    <v-icon icon="mdi-link-variant" size="large" color="orange" />
                    Live
                </div>
            </v-btn>

            <v-btn :href="projectProps.href" target="_blank" color="orange">
                <div class="d-flex align-center justify-center">
                    <v-icon icon="mdi-github" size="large" color="orange" />
                    Visit Project
                </div>

            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { mdiAccount } from '@mdi/js'

export default {
    name: "ProjectItem",
    props: ['projectProps'],
    data: () => ({
        mdiAccount
    }),
}
</script>
<style>
.text-caption {
    min-height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
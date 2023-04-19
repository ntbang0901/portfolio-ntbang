<template>
    <article class="contact">
        <header>
            <h2 class="title">Contact</h2>
        </header>
        <form @submit.prevent="submit">
            <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value" label="Name" />

            <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
                label="Phone Number" />

            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="E-mail" />
            <v-textarea v-model="message.value.value" counter label="Message" maxlength="120" single-line />

            <v-btn class="me-4" type="submit">
                submit
            </v-btn>

            <v-btn @click="handleReset">
                clear
            </v-btn>
        </form>
    </article>
</template>
<script>
import { useField, useForm } from 'vee-validate'

export default {
    name: "Contact",
    setup() {
        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 2) return true

                    return 'Name needs to be at least 2 characters.'
                },
                phone(value) {
                    if (value?.length > 9 && /[0-9-]+/.test(value)) return true

                    return 'Phone number needs to be at least 9 digits.'
                },
                email(value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },

            },
        })
        const name = useField('name')
        const phone = useField('phone')
        const email = useField('email')
        const message = useField('message')


        const submit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2))
        })

        return { name, phone, email, message, submit, handleReset }
    },
}
</script>
<style lang="">
    
</style>
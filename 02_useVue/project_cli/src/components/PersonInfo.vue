<template>
    <h1>{{ name }}</h1>
    <h3>電子郵件: {{ email }}</h3>
    <h3>年齡: {{ age }}</h3>
    <h3>職稱: {{ job_title }}</h3>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const name = ref('John');
        const email = ref('john@gmail.com');
        const age = ref(30);
        const job_title = ref('專案經理');
        return{
            name,
            email,
            age,
            job_title
        };
    }
});

</script>
<style scoped>

</style>
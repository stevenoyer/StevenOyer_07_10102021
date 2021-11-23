<template>
    <h1>{{ hello }}</h1>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
            hello: String
        },
        component: {
            hello: 'Hello World'
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
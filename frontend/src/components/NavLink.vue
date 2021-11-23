<template>
    <a :href="url">{{ text }}</a>
</template>

<script>
    export default {
        name: 'NavLink',
        props: ['url', 'text']
    }
</script>

<style>
    a {
        text-decoration: none;
        padding: 10px;
        color: #fff;
    }
</style>
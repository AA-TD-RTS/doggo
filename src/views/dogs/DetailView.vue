<template>
    <h1>Doggo Details page</h1>
    <p> Doggo Id is: {{ id }}</p>

</template>


<script>
    export default{
        props: ['id'],
        /*data() {
            return {
                id: this.$route.params.id
            }
        },*/
    }
</script>


<style>

</style>
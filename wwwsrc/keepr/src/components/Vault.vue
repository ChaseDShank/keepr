<template>

<h1>hello</h1>

</template>



<script>
export default {
        data() {
            return {
               
            }
        },
        mounted() {
            this.$store.dispatch('getKeeps')
            this.$store.dispatch('getVaults')
        },

        methods: {},

        computed: {
            user() {
                return this.$store.state.user
            },
            keeps() {
                return this.$store.state.keeps
            },
            vaults(){
                return this.$store.state.vaults
            }
        }
    }



</script>



<style>



</style>
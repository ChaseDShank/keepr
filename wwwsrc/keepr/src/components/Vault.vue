<template>
<div>
<div v-for="v in vaultKeeps">
    <h2>{{vaultKeep.vaultId}}</h2>
</div>
</div>

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
            this.$store.dispatch('getKeepsByVault')
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
            },
            vaultKeeps(){
                return this.$store.state.activeVaultKeeps
            }
        }
    }



</script>



<style>



</style>
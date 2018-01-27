<template>
<div class="row text-center">

<div v-for="v in vaultKeeps">
    <div class="col-xs-12 col-md-3">
        <h4>{{v.title}}</h4>
        <img id="bigPicture" class="thumbnail" :src="v.imgUrl" alt="Keepr Keep">
              

    </div>
</div>

</div>

</template>



<script>
export default {
    name: 'vault',
        data() {
            return {
               
            }
        },
        mounted() {
            this.$store.dispatch('getKeeps')
            this.$store.dispatch('getVaults')
            this.$store.dispatch('getKeepsByVault', this.$route.params.id)
        },

        methods: {
            
        },

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
                return this.$store.state.activeVaultKeep
            }
        }
    }



</script>



<style>

img {
    width: 20vw;
    height: auto;
  }

</style>
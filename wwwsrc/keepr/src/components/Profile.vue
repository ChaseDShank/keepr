<template>
    <div>
        <div class="row text-center">
            <div class="col-xs-6">
                <button v-if="user.username" class="btn new" data-toggle="modal" data-target="#keepModal"><h3>+ New Keep +</h3></button>
            </div>
            <div class="col-xs-6">
                    <button v-if="user.username" class="btn new" data-toggle="modal" data-target="#vaultModal"><h3>+ New Vault +</h3></button>
                </div>


            <div id="keepModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h1 class="modal-title">New Keep</h1>
                        </div>
                        <div class="modal-body">
                            <form class="form" @submit.prevent="addKeep">

                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input class="form-control" type="text" name="title" v-model="keep.title" maxlength="20" required>
                                </div>
                                <div class="form-group">
                                    <label for="imgUrl">Image URL</label>
                                    <input class="form-control" type="text" name="imgUrl" v-model="keep.imgUrl" maxlength="255" required>
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <input class="form-control" type="text" name="description" v-model="keep.description" maxlength="35" required>
                                </div>
                                <div class="form-group text-left">
                                    <input type="checkbox" id="public" name="public" value="false" v-model="keep.public">
                                    <label for="public">Make this public</label>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-success" type="submit">Post</button>
                                    <br>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="clearKeepForm" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="vaultModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h1 class="modal-title">New Vault</h1>
                            </div>
                            <div class="modal-body">
                                <form class="form" @submit.prevent="addVault">
    
                                    <div class="form-group">
                                        <label for="title">Name</label>
                                        <input class="form-control" type="text" name="name" v-model="vault.name" maxlength="20" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <input class="form-control" type="text" name="description" v-model="vault.description" maxlength="30" required>
                                    </div>
                                   
                                    <div class="form-group">
                                        <button class="btn btn-success" type="submit">Create</button>
                                        <br>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" @click="clearVaultForm" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>






        </div>

        <div class="row text-center">
            <h2>Vaults</h2><hr>
                <div v-for="vault in vaults">
                    <div v-if="vault.userId == user.id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div class="card-title">
                        <router-link :to="'/vault'+vault.id" style="font-size: 2em">{{vault.name}}</router-link>
                            </div>
                           
                            <div class="card-footer">
                                    <button @click="deleteVault(vault)" class="btn btn-danger">Delete</button>
                                </div>
                        
                    </div>
                </div>
            </div>
<hr>
        <div class="row text-center">
                <h2>Keeps</h2><hr>

            <div v-for="keep in keeps">
                <div v-if="keep.userId == user.id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
                    <div class="card-header">
                        <h4>{{keep.title}}</h4>
                        <div class="card-body">
                            <img :src="keep.imgUrl" alt="Keepr Keep">
                        </div>
                        <p class="card-footer">{{keep.description}}</p>
                        <button v-if="keep.userId == user.id" @click="deleteKeep(keep)" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
<hr>
    </div>
</template>






<script>
    export default {
        data() {
            return {
                keep: {
                    title: '',
                    imgUrl: '',
                    description: '',
                    public: 'true'
                
                },
                vault: {
                    name: '',
                    description: '',
                }
            }
        },
        mounted() {
            this.$store.dispatch('getKeeps')
            this.$store.dispatch('getVaults')
        },

        methods: {
            addKeep() {
                this.$store.dispatch('addKeep', this.keep)
                $('#keepModal').modal('toggle')
                this.keep = {}
            },
            addVault() {
                this.$store.dispatch('addVault', this.vault)
                console.log(this.vault)
                $('#vaultModal').modal('toggle')
                this.vault = {}
            },
            deleteVault(vault){
                this.$store.dispatch('deleteVault', vault)
            },
            clearKeepForm() {
                this.keep = {}
            },
            clearVaultForm() {
                this.vault = {}
            },
            deleteKeep(keep) {
                this.$store.dispatch('deleteKeep', keep)
            },
            

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
            }
        }
    }

</script>



<style>


    .row {
        margin: 0px;
        max-width: 100vw;
        margin-bottom: 3px;
    }

    img {
        width: 20vw;
        height: auto;

    }
    .img:hover{
        cursor: pointer;
    }

    .btn-danger {
        z-index: 1;
    }

    .new{
        height: 100px;
        width: 15vw;
        font-family: 'Berkshire Swash', cursive;
    }
    .new:hover{
        background-color:  rgba(148, 42, 4, 0.452);
    }
    h2{
        background-color: rgba(46, 62, 209, 0.123);
        width: 65%;
        margin: auto
    }


</style>
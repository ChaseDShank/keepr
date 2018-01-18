<template>
    <div>
        <div class="row text-center">
            <div class="col-xs-12">
                <button v-if="user.username" class="btn btn-primary" data-toggle="modal" data-target="#keepModal">+ Create a new Keep</button>
            </div>


            <div id="keepModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h2 class="modal-title">New Keep</h2>
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
                                    <input class="form-control" type="text" name="description" v-model="keep.description" maxlength="35">
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
                            <button type="button" class="btn btn-danger" @click="clearForm" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row text-center">
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
                    public: 'true',
                },
            }
        },
        mounted() {
            this.$store.dispatch('getKeeps')
        },

        methods: {
            addKeep() {
                this.$store.dispatch('addKeep', this.keep)
                console.log(this.keep)
                $('#keepModal').modal('toggle')
                this.keep = {}
            },
            clearForm() {
                this.keep = {}
            },
            deleteKeep(keep) {
                this.$store.dispatch('deleteKeep', keep)
            }

        },

        computed: {
            user() {
                return this.$store.state.user
            },
            keeps() {
                return this.$store.state.keeps
            }
        }
    }

</script>



<style>


    .row {
        margin: 0px;
        max-width: 100vw
    }

    img {
        width: 20vw;
        height: auto
    }

    .btn-danger {
        z-index: 1
    }


</style>
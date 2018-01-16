<template>
    <div class="row text-center">
        <div class="col-xs-12">
            <h3 data-toggle="modal" data-target="#keepModal">+ Create Keep</h3>
        </div>


        <div id="keepModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h2 class="modal-title">New Keep</h2>
                    </div>
                    <div class="modal-body">
                        <form class="form" @submit.prevent="submitKeep">

                            <div class="form-group">
                                <label for="text">Title</label>
                                <input class="form-control" type="text" name="title" required>
                            </div>
                            <div class="form-group">
                                <label for="url">Image URL</label>
                                <input class="form-control" type="text" name="url" required>
                            </div>
                            <div class="form-group">
                                <h3>Who can see this Keep?</h3>
                                <input type="radio" id="public" name="prvacy" checked>
                                <label for="public">Everyone</label>
                                <input type="radio" id="private" name="prvacy">
                                <label for="private">Only Me</label>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success" type="submit">Post</button><br>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>






<script>
    export default {
        data() {
            return {}
        },

        methods: {},

        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }

</script>






<style>
</style>
<template>
  <div>
    <div class="row text-center">
      <div v-for="keep in keeps">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
          <div class="card-header">
            <h3>
              <strong>{{keep.title}}</strong>
            </h3>
            <div class="card-body">
              <img id="img" data-toggle="modal" data-target="#openKeep" @click="setActiveKeep(keep), incViews(keep, user)" :src="keep.imgUrl"
                alt="Keepr Keep">
            </div>
            <p class="card-footer">{{keep.description}}</p>
            <!-- <div class="col-xs-6"><h6>Views: {{keep.viewCount}}</h6></div>
          <div class="col-xs-6"><h6>Keeps: {{keep.keepCount}}</h6></div> -->
            <button v-if="keep.userId == user.id" @click="deleteKeep(keep)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>



    <div id="openKeep" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">{{keep.title}}</h1>
            <span>
              <strong>Views:</strong> {{keep.viewCount}}</span>
            <span>
              <strong>Keeps:</strong> {{keep.keepCount}}</span>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body text-center">
            <div>
              <img id="bigPicture" class="thumbnail" :src="keep.imgUrl" alt="Keepr Keep">
            </div>
          </div>
          <div class="modal-footer text-center">
            <span>Add to Vault: </span>
            <form>
            <select v-model="vaultKeep.vaultId">
              <option :value="vault.id" v-for="vault in vaults">{{vault.name}}</option>
            </select>
          </form>
            <span><button @click="addToVault(keep)">ADD</button></span>
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
        keep: {},
        vaultKeep: {}
      }
    },
    methods: {
      deleteKeep(keep) {
        this.$store.dispatch('deleteKeep', keep)
      },
      setActiveKeep(keep) {
        this.keep = keep
      },

      incViews(keep, user) {
        if (user == "") {
          return
        }
        if (user.id != keep.userId) {
          this.$store.dispatch('incViews', keep)
        }
        else return
      },

      addToVault(keep){
        this.vaultKeep.keepId = keep.id 
        this.$store.dispatch('addKeepToVault', this.vaultKeep)
      }

    },
    mounted() {
      this.$store.dispatch('getKeeps')
      this.$store.dispatch('getVaults')
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

<style scoped>
  .row {
    max-width: 100vw;
    margin: 0px
  }


  #bigPicture {
    width: 100%
  }

  img {
    width: 20vw;
    height: auto
  }

  #img:hover {
    cursor: pointer;
  }


  .btn-danger {
    z-index: 1
  }
</style>
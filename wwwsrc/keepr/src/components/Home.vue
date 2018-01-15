<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="container">
        <img src="https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-medium-landing-hero.ashx" alt="doggo">
        <div class="overlay"></div>
        <div class="button" @click="addedAlert">
          <a href="#"> BUTTON </a>
        </div>
      </div>
    </div>


    <div id="addedAlert">Added!</div>

    <!-- The actual snackbar -->
  </div>




</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      addedAlert() {
        var x = document.getElementById("addedAlert")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 2500);
      }

    },
    computed: {
    user(){
      return this.$store.state.user
    }
  }
  }
</script>

<style scoped>
  #addedAlert {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: rgb(33, 104, 51);
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 10vh;
  }

  #addedAlert.show {
    visibility: visible;
    /* Show the snackbar */
    -webkit-animation: fadein 0.75s, fadeout 0.5s 2.0s;
    animation: fadein 0.5s, fadeout .75s 2.0s;
  }

  @-webkit-keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      top: 30px;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      top: 30px;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
  }

  .row {
    max-width: 100vw;
    margin: 0px
  }






  .container {
    position: relative;
    margin-top: 50px;
    width: 500px;
    height: 300px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
  }

  .container:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, .3);
  }

  img {
    position: absolute;
    width: 500px;
    height: 300px;
    left: 0;
  }



  .container:hover .title {
    top: 90px;
  }

  .button {
    position: absolute;
    width: 500px;
    left: 0;
    top: 180px;
    text-align: center;
    opacity: 0;
    transition: opacity .35s ease;
  }

  .button a {
    width: 200px;
    padding: 12px 48px;
    text-align: center;
    color: white;
    border: solid 2px white;
    z-index: 1;
  }

  .container:hover .button {
    opacity: 1;
  }
</style>
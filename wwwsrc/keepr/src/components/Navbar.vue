<template>
  <div>

    <div v-if="loginForm" id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <form class="form" @submit.prevent="submitLogin">
              <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="email" name="email" v-model="login.email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" v-model="login.password" required>
              </div>
              <div class="form-group">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <p v-if="loginForm" @click="toggleLoginForm" class="action">Don't have an account?
              <strong>Sign up!</strong>
            </p>
            <p v-else @click="toggleLoginForm" class="action">Already a user?
              <b>Click here to login</b>
            </p>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Register</h4>
          </div>
          <div class="modal-body">
            <form class="form" @submit.prevent="submitRegister">
              <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" type="text" name="username" v-model="register.username" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="email" name="email" v-model="register.email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" v-model="register.password" required>
              </div>
              <div class="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button v-if="loginForm" @click="toggleLoginForm" class="action">Don't have an account?
              <b>Sign up!</b>
            </button>
            <p v-else @click="toggleLoginForm" class="action">Already a user?
              <b>Click here to login</b>
            </p>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>





    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#home">Keepr</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li v-if="user">
            <h3 id="welcome">Welcome
              <a href="#profile">{{user.username}}</a>
            </h3>
          </li>

          <li v-if="user">
            <a @click="logout">
              <span class="glyphicon glyphicon-log-in"></span> Logout</a>
          </li>
          <li v-else data-toggle="modal" data-target="#myModal">
            <a href="#">
              <span class="glyphicon glyphicon-user"></span>Login</a>
          </li>


        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        loginForm: true,
        login: {
          email: '',
          password: ''
        },
        register: {
          username: '',
          email: '',
          password: ''
        }
      }
    },

    methods: {
      toggleLoginForm() {
        this.loginForm = !this.loginForm
      },
      submitLogin() {
        this.$store.dispatch('login', this.login)
        this.login = {
          email: '',
          password: ''
        },
          $('#myModal').modal('toggle')
      },
      submitRegister() {
        this.$store.dispatch('register', this.register)
        this.register = {
          username: '',
          email: '',
          password: ''
        },
          $('#myModal').modal('toggle')
      },
      logout() {  
        this.$store.dispatch('logout')
        location.reload()
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }

</script>

<style>
  .navbar {
    background-color: rgb(148, 42, 4);
    color: black
  }

  li a {
    color: black
  }
  li a:hover{
    cursor: pointer;
  }

  #welcome {
    margin-right: 20vw
  }

  .navbar-brand {
    color: rgb(27, 2, 66)
  }

  .action {
    cursor: pointer;
  }


</style>
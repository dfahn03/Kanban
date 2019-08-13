<template>
  <div class="container-fluid login">
    <div class="row login-row">
      <div class="col-5">
        <div class="card">
          <img class="card-img" src="../assets/Post-it.png" alt="Card image">
          <div class="card-img-overlay">
            <h5 class="card-title"><b>Login</b></h5>
            <form v-if="loginForm" @submit.prevent="loginUser" class="text-center">
              <input type="email" v-model="creds.email" placeholder="Email" class="text-center login-inputs">
              <input type="password" v-model="creds.password" placeholder="Password"
                class="text-center mt-1 login-inputs">
              <br>
              <button type="submit" class="btn btn-success mt-1">Login</button>
            </form>
            <form v-else @submit.prevent="register">
              <div class="form-row justify-content-center">
                <input type="text" v-model="newUser.name" placeholder="Name" class="text-center">
              </div>
              <div class="form-row justify-content-center">
                <input type="email" v-model="newUser.email" placeholder="Email" class="text-center mt-1">
              </div>
              <div class="form-row justify-content-center">
                <input type="password" v-model="newUser.password" placeholder="Password" class="text-center mt-1">
              </div>
              <div class="form-row justify-content-center">
                <button type="submit" class="btn btn-success mt-1">Create Account</button>
              </div>
            </form>
            <div class="action mr-2" @click="loginForm = !loginForm">
              <p v-if="loginForm" class="reg-text mt-3">No Account? Click to Register</p>
              <p v-else class="reg-log-text mt-1">Have Account? Click to Login!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'

  export default {
    name: "Login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style scoped>
  .action {
    cursor: pointer;
  }

  .container-fluid {
    height: 100vh;
  }

  .login {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url("../assets/login-2.jpg");
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  .login-row {
    height: 100vh;
    justify-content: left;
    align-items: center;
  }

  .login-btn {
    margin-left: 75px;
    margin-top: 5px
  }

  .login-inputs {
    max-width: 100%;
  }

  .card-title {
    font-family: 'Kalam', cursive;
    font-size: 2rem;
    margin-bottom: .2rem;
  }

  .card-img {
    height: 38vh;
  }

  .card-img-overlay {
    margin-left: 10px;
    margin-right: 15px;
    margin-top: 8px;
  }

  .card {
    margin-left: 12vw;
    margin-right: 2vw;
    margin-top: 30vh;
    border: none;
    height: 38vh;
    background-color: transparent;
  }

  .reg-log-text:hover,
  .reg-text:hover {
    cursor: pointer;
    color: blue;
  }
</style>
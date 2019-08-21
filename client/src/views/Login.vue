<template>
  <div class="col login">
    <div class="row login-row justify-content-center align-items-center">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="card text-dark" style="width: 40rem;">
          <div class="card-body">
            <h1 class="card-title">Welcome to deNOTEvator</h1>
            <h6 class="card-text">deNOTEvator is the best site to utilize the Scrum methodology for your projects
              through
              boards, lists and tasks.
              Sign in for the best inspiration you have ever seen!</h6>
            <button type="button" class="btn btn-sm mt-3 regBtn" data-toggle="modal" data-target="#registerModal"
              title="Register">Register</button>
            <button type="button" class="btn btn-sm ml-1 mt-3 logBtn" data-toggle="modal" data-target="#loginModal"
              title="Login">Login</button>
          </div>
        </div>
        <register-modal />
        <login-modal />
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  import RegisterModal from "@/components/RegisterModal.vue"
  import LoginModal from "@/components/LoginModal.vue"

  export default {
    name: "Login",
    data() {
      return {}
    },
    components: {
      RegisterModal,
      LoginModal
    },
  };
</script>

<style scoped>
  .login {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url("../assets/login-4.jpg");
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
    width: 100vw;
  }

  .card {
    border: 1px black;
    background-color: rgba(255, 255, 255, 0.726);
    min-height: max-content;
  }

  .card-title {
    font-family: 'Kalam', cursive;
    font-weight: bolder;
    margin-bottom: .2rem;
  }

  .card-text {
    font-weight: bold;
  }

  .regBtn {
    background-color: rgb(87, 61, 61);
    color: #fff;
  }

  .logBtn {
    background-color: rgb(0, 83, 0);
    color: #fff;
  }
</style>
<template>
  <div class="container-fluid boards">
    <div class="row">
      <div class="col-4 offset-md-4">
        <h1 class="brand">de<span class="brand-mid">Note</span>vator</h1>
      </div>
      <div class="col-2 offset-md-2">
        <button class="btn btn-sm btn-danger mt-2 float-right" @click="userLogOut">Log Out</button>
        <h6 class="user-name float-right mr-2 mt-3">@{{user.name}}</h6>
      </div>
    </div>
    <div class="row" v-show="showForm">
      <div class="col">
        <form @submit.prevent="addBoard">
          <input type="text" placeholder="Title" v-model="newBoard.title" required class="text-center">
          <input type="text" placeholder="Description" v-model="newBoard.description" required class="text-center ml-1">
          <button class="btn btn-success ml-1 mb-1 btn-sm" type="submit">Create Board</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-sm btn-dark mb-2" @click="showForm = !showForm" v-if="!showForm">Add
          Board</button>
        <button type="button" class="btn btn-sm btn-warning mb-2" @click="showForm = !showForm"
          v-else-if="showForm">Cancel</button>
      </div>
    </div>
    <div class="row">
      <div class="card-columns">
        <div class="container" v-for="board in boards" :key="board._id">
          <img :src="getRandomImg()" alt="Demotivator Image" class="image">
          <div class="middle">
            <div class="text">

              <h5 @click="openBoard(board._id)" class="open-bug"><b>{{board.title}}</b></h5>
              <p @click="openBoard(board._id)" class="open-bug">{{board.description}}</p>
              <img src="../assets/trash-30.png" alt="Delete Board" title="Delete Board" @click="deleteBoard(board._id)"
                class="del-board-btn">
              <!-- <button type="button" class="btn btn-sm btn-danger" @click="deleteBoard(board._id)">Delete</button> -->
            </div>
          </div>
        </div>
        <div class="container" v-for="board in sharedBoards" :key="board._id">
          <img :src="getRandomImg()" alt="Demotivator Image" class="image">
          <div class="middle">
            <div class="text">
              <h5 @click="openBoard(board._id)" class="open-bug"><b>{{board.title}}</b><i class="fas fa-users ml-1"></i>
              </h5>
              <p @click="openBoard(board._id)" class="open-bug">{{board.description}}</p>
              <button type="button" class="btn btn-sm btn-danger" @click="deleteBoard(board._id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Boards",
    mounted() {
      this.$store.dispatch("getBoards");
      this.$store.dispatch("getSharedBoards")
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        },
        showForm: false,
        // images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpg', '7.jpeg', '8.jpg', '9.jpeg', '10.jpg', '11.jpeg', '12.jpeg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpeg', '19.jpg']
      };
    },
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "Login" });
      }
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      },
      sharedBoards() {
        return this.$store.state.sharedBoards
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(boardId) {
        this.$store.dispatch("deleteBoard", boardId);
      },
      userLogOut() {
        this.$store.dispatch('logout')
      },
      openBoard(boardId) {
        this.$router.push({ name: 'Board', params: { boardId } })
      },
      getRandomImg() {
        let images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpg', '7.jpeg', '8.jpg', '9.jpeg', '10.jpg', '11.jpeg', '12.jpeg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpeg', '19.jpg']
        let randomNum = Math.floor(Math.random() * images.length)
        return 'images/' + images[randomNum]
      }
    }
  };
</script>

<style>
  .boards {
    background-image: url('../assets/boards-bg-8.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-width: 100%;
    min-height: 100%;
    font-family: 'Raleway', sans-serif;
  }

  .brand {
    font-size: 4em;
    font-family: 'Permanent Marker', cursive;
  }

  .brand-mid {
    font-size: 1.3em;
    font-family: 'Permanent Marker', cursive;
  }

  .user-name {
    font-family: 'Kalam', cursive;
    font-weight: bolder;
  }

  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }

    @include media-breakpoint-only(xl) {
      column-count: 5;
    }

    @include media-breakpoint-only(sm) {
      column-count: 2;
    }
  }

  .container {
    position: relative;
    width: 85%;
    display: inline-block;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

  }

  .container:hover .image {
    opacity: 0.5;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: rgba(253, 253, 253, 0.363);
    color: rgb(0, 0, 0);
    font-size: 20px;
    background-size: cover;
    /* padding: 16px 32px; */
  }

  .del-board-btn {
    cursor: pointer;
  }

  .open-bug {
    cursor: pointer;
  }

  .open-bug:hover {
    color: blue;
  }
</style>



/* <router-link :to="{name: 'Board', params: {boardId: board._id}}"><b>{{board.title}}</b></router-link> */
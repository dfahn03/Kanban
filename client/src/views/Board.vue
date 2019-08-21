<template>
  <div class="board container-fluid">
    <div class="row">
      <div class="col-5">
        <h2 class="brand float-left">de<span class="brand-mid">Note</span>vator</h2>
      </div>
      <div class="col-5">
        <router-link to="/"><a class="float-left ml-5 mt-1 text-dark"><b class="boards-link">Boards
              Home</b></a>
        </router-link>
      </div>
      <div class="col-2">
        <button class="btn btn-danger btn-sm mt-1 float-right" @click="userLogOut">Log Out</button>
        <span class="user-name mr-2 float-right">@{{user.name}}</span>
      </div>
    </div>

    <div class="col d-flex justify-content-center align-items-center">
      <h1 class="board-title">{{board.title}}</h1>
      <div class="dropdown ml-5">
        <button class="btn" type="button" id="board-dropdown-menu" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false"><img src="../assets/three-lines-icon.png" style="height: 2rem;" title="Board Menu"
            class="board-ddown"></button>
        <div class="dropdown-menu">
          <button class="dropdown-item" type="button" @click="showAddCollabForm = !showAddCollabForm"
            v-if="!showAddCollabForm">Add Collaborator</button>
          <button class="dropdown-item" type="button" @click="showForm = !showForm" v-if="!showForm">Edit
            Board</button>
          <button class="dropdown-item" type="button" @click="showAddListForm = !showAddListForm"
            v-if="!showAddListForm">Create List</button>
        </div>
      </div>
    </div>

    <div class="col-12">
      <h5 class="board-desc mr-5 mb-1">{{board.description}}</h5>
    </div>

    <div class="col-12 mt-2">
      <form @submit.prevent="addSharedUser" v-show="showAddCollabForm">
        <input type="text" placeholder="User Name" v-model="userName" class="text-center">
        <button type="submit" class="btn btn-sm btn-success ml-1 mb-1 py-1">Add User</button>
      </form>
      <button @click="showAddCollabForm = !showAddCollabForm" v-if="showAddCollabForm"
        class="btn btn-sm btn-warning mr-5">
        Cancel Invite</button>
    </div>

    <div class="col-12 mt-2">
      <form v-show="showForm" @submit.prevent="editBoard">
        <input type="text" placeholder="Edit Board Title" v-model="boardTitle" class="text-center">
        <input type="text" placeholder="Edit Board Description" v-model="boardDescription" class="text-center ml-1">
        <button class="btn btn-success ml-1 mb-1" type="submit">Submit Changes</button>
      </form>
      <button class="btn btn-warning mt-1 mr-5" @click="showForm = !showForm" v-if="showForm">Cancel Edit</button>
    </div>

    <div class="col-12 mt-2">
      <form @submit.prevent="addList" v-show="showAddListForm">
        <input type="text" v-model="title" placeholder="Enter List Name" required class="text-center">
        <button class="btn btn-success ml-1 mb-1 py-1" type="submit">Add List</button>
      </form>
      <button class="btn btn-warning mr-5" @click="showAddListForm = !showAddListForm"
        v-if="showAddListForm">Cancel</button>
    </div>
    <div class="col">
      <div class="row">
        <list class="col-3 mt-4" v-for="list in lists" :key="list._id" :listData="list" />
      </div>
    </div>
    <!-- TODO - Add Sockets to the project so any collaborator gets instant feedback when users modify a board -->

  </div>
</template>

<script>
  import List from "@/components/List.vue"

  export default {
    name: "Board",
    props: ["boardId"],
    mounted() {
      this.$store.dispatch('getLists', this.boardId)
      this.$store.dispatch('getBoards', this.boardId)
      this.$store.dispatch('getSharedBoards', this.boardId)

    },
    data() {
      return {
        title: "",
        showForm: false,
        boardTitle: "",
        boardDescription: "",
        userName: "",
        showAddCollabForm: false,
        showAddListForm: false
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      board() {
        return (
          this.$store.state.boards.find(b => b._id == this.boardId) || this.$store.state.sharedBoards.find(b => b._id == this.boardId) ||
          { title: "Loading..." }
        );
      },
      lists() {
        return this.$store.state.lists
      }
    },
    components: {
      List
    },
    methods: {
      addList() {
        let newList = {
          title: this.title,
          boardId: this.boardId,
          authorId: this.board.authorId
        }
        this.$store.dispatch('addList', newList)
        this.title = ''
        this.showAddListForm = false
      },

      editBoard() {
        if (!this.boardTitle) { this.boardTitle = this.board.title }
        if (!this.boardDescription) { this.boardDescription = this.board.description }
        let boardEdits = {
          title: this.boardTitle,
          description: this.boardDescription,
          _id: this.board._id
        }
        this.$store.dispatch('editBoard', boardEdits)
        this.boardTitle = ""
        this.boardDescription = ""
        this.showForm = false
      },
      userLogOut() {
        this.$store.dispatch('logout')
      },
      addSharedUser() {

        let sharedBoard = {
          name: this.userName,
          _id: this.board._id,
          sharedIds: this.board.sharedIds
        }
        this.$store.dispatch('getUserByName', sharedBoard)

        this.userName = ""
        this.showAddCollabForm = false
      }
    }
  };
</script>

<style scoped>
  .board {
    font-family: 'Raleway', sans-serif;
    background-image: url('../assets/office-bg.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
    min-width: 100vw;
    min-height: 100%;
  }

  .boards-link {
    font-size: 1.3em;
    font-family: 'Kalam', cursive;
  }

  .boards-link:hover {
    color: blue;
  }

  .router-link:hover {
    color: blue;
  }

  .brand {
    font-size: 1.3em;
    font-family: 'Kalam', cursive;
    font-weight: bold;
    margin-top: .3rem
  }

  .brand-mid {
    font-size: 1.2em;
    font-family: 'Kalam', cursive;
    font-weight: bold;
    padding-top: .5rem
  }

  .user-name {
    font-family: 'Kalam', cursive;
    font-weight: bold;
    margin-top: .5rem;
  }

  .board-title {
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
  }

  .btn {
    padding: .0rem .3rem;
  }
</style>
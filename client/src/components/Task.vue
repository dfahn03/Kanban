<template>
  <drag :transfer-data="taskData" :effect-allowed="['move']" drop-effect="move" class="drag task">
    <div class="card border-dark mb-3 justify-content-center" style="max-width: 25rem;">
      <div class="card-header">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h6 class="mt-1"><b>{{taskData.description}}</b></h6>
            <div class="dropdown">
              <button class="btn p-0 ml-2 align-self-top" type="button" id="task-dropdown-menu" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"><img src="../assets/three-lines-icon.png"
                  style="height: 1rem;" title="Board Menu" class="board-ddown"></button>
              <div class="dropdown-menu">
                <button class="dropdown-item" type="button" @click="showAddCommentForm = !showAddCommentForm"
                  v-if="!showAddCommentForm">Add Comment</button>
                <button class="dropdown-item" type="button" @click="showForm = !showForm" v-if="!showForm">Edit
                  Note</button>
                <button class="dropdown-item" type="button" @click="deleteTask">Delete Note</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body text-dark">
        <div class="row">
          <div class="col-12">
            <form v-show="showForm" @submit.prevent="editTask">
              <input type="text" placeholder="Edit Description" v-model="taskDescription">
              <button type="submit" class="btn btn-sm btn-success ml-1 mt-1">Submit Changes</button>
            </form>
            <button @click="showForm = !showForm" v-if="showForm" class="btn btn-sm btn-warning ml-1 mt-1">Cancel
              Edit</button>
          </div>
          <div class="col-12 mt-1">
            <form @submit.prevent="addComment" v-show="showAddCommentForm">
              <input type="text" v-model="content" placeholder="Your Comment" class="text-center">
              <button class="btn btn-sm btn-success mt-1 ml-1" type="submit">Add Comment</button>
            </form>
            <button @click="showAddCommentForm = !showAddCommentForm" v-if="showAddCommentForm"
              class="btn btn-sm btn-warning ml-1 mt-1 mb-1">Cancel</button>
          </div>
        </div>
        <div class="row justify-content-center" v-for="comment in taskData.comments">
          <div class="card border-dark mb-3" style="max-width: 20rem;">
            <div class="card-body text-dark text-center comment-body">
              <p class="mb-1">{{comment.content}}</p>
              <p class="author-comment">@{{comment.authorId.name}} <img src="../assets/icons8-delete-filled-15.png"
                  alt="Delete Comment" title="Delete Comment" @click="deleteComment(comment._id)" class="ml-1 mb-1">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </drag>
</template>

<script>
  import { Drag, Drop } from 'vue-drag-drop';

  export default {
    name: "Task",
    props: ['taskData'],
    data() {
      return {
        content: "",
        taskDescription: "",
        showForm: false,
        showAddCommentForm: false
      }
    },
    components: {
      Drag,
      Drop
    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      },
      addComment() {
        let newComment = {
          content: this.content,
          authorId: this.$store.state.user._id,
        }
        this.taskData.comments.push(newComment)
        this.$store.dispatch('editTask', this.taskData)
        this.content = ''
        this.showAddCommentForm = false
      },
      deleteComment(id) {
        this.taskData.comments = this.taskData.comments.filter(comment => comment._id !== id)
        this.$store.dispatch('editTask', this.taskData)
      },
      editTask() {
        if (this.taskDescription) {
          this.taskData.description = this.taskDescription
          this.$store.dispatch('editTask', this.taskData)
          this.taskDescription = ""
          this.showForm = false
        }
      },
      changeList(newListId) {
        let oldListId = this.taskData.listId
        this.taskData.listId = newListId
        this.$store.dispatch('moveTask', { task: this.taskData, oldListId })
      }
    },
    computed: {
      lists() {
        return this.$store.state.lists
      },
    }
  }
</script>

<style scoped>
  .card {
    background: transparent;
  }

  .button {
    padding: .1rem .3rem;
  }

  img {
    cursor: pointer;
    size: 1rem;
  }

  .author-comment {
    font-size: 12px;
    margin-bottom: 1px;
    font-style: italic;
  }

  .comment-body {
    padding: 5px 5px;
  }
</style>


<!-- <div class="dropdown">
      <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Move
        Note </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <p class="dropdown-item" @click="changeList(list._id)" v-for="list in lists"
          v-if="list._id !== taskData.listId">{{list.title}}</p>
      </div>
    </div> -->
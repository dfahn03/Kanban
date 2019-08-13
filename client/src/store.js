import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    sharedBoards: [],
    lists: [],
    tasks: {},
    comments: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setSharedBoards(state, sharedBoards) {
      state.sharedBoards = sharedBoards
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, tasks) {
      Vue.set(state.tasks, tasks.listId, tasks.results)
    },
    setComments(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          if (router.currentRoute.name !== 'board') {
            router.push({ name: 'boards' })
          }
        })
        .catch(res => {
          router.push({ name: 'Login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },

    async logout({ commit, dispatch }) {
      await auth.delete('logout')
      commit('setUser', {})
      router.push({ name: 'Login' })
    },

    async getUserByName({ commit, dispatch }, payload) {
      try {
        let res = await auth.get(payload.name)
        payload.sharedIds.push(res.data[0]._id)
        dispatch('editBoard', payload)
      } catch (err) { console.error(err) }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          // res.data.forEach(i => Math.floor(Math.random(i) * images.length))
          commit('setBoards', res.data)
        })
    },
    async getSharedBoards({ commit, dispatch }) {
      try {
        let res = await api.get('boards/shared')
        commit('setSharedBoards', res.data)
      } catch (err) { console.error(err) }
    },

    async getBoardById({ commit, dispatch }, boardId) {
      try {
        let res = await api.get('boards/' + boardId)
        commit('setActiveBoard', res.data)
      } catch (err) { console.error(err) }
    },

    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },

    async editBoard({ commit, dispatch }, payload) {
      try {
        await api.put('boards/' + payload._id, payload)
        dispatch('getBoards')
      } catch (err) { console.error(err) }
    },
    //#endregion

    //#region -- LISTS --
    async getLists({ commit, dispatch }, boardId) {
      try {
        let res = await api.get('boards/' + boardId + '/lists')
        commit('setLists', res.data)
      } catch (err) { console.error(err) }
    },
    async addList({ commit, dispatch }, newList) {
      try {
        await api.post('lists', newList)
        dispatch('getLists', newList.boardId)
      } catch (err) { console.error(err) }
    },
    deleteList({ commit, dispatch }, payload) {
      api.delete('lists/' + payload._id)
        .then(res => {
          dispatch('getLists', payload.boardId)
        })
    },
    async editList({ commit, dispatch }, payload) {
      try {
        await api.put('lists/' + payload._id, payload)
        dispatch('getLists', payload.boardId)
      } catch (err) { console.error(err) }
    },


    //#endregion

    //#region -- TASKS --
    async getTasks({ commit, dispatch }, listId) {
      try {
        let res = await api.get('lists/' + listId + '/tasks')
        commit('setTasks', { listId: listId, results: res.data })
      } catch (err) { console.error(err) }
    },
    async addTask({ commit, dispatch }, newTask) {
      try {
        await api.post('tasks', newTask)
        dispatch('getTasks', newTask.listId)
      } catch (err) { console.error(err) }
    },
    async editTask({ commit, dispatch }, payload) {
      try {
        await api.put('tasks/' + payload._id, payload)
        dispatch('getTasks', payload.listId)
      } catch (err) { console.error(err) }
    },
    async moveTask({ commit, dispatch }, payload) {
      try {
        await api.put('tasks/' + payload.task._id, payload.task)
        dispatch('getTasks', payload.task.listId)
        if (payload.oldListId) {
          dispatch('getTasks', payload.oldListId)
        }
      } catch (err) { console.error(err) }
    },
    deleteTask({ commit, dispatch }, payload) {
      api.delete('tasks/' + payload._id)
        .then(res => {
          dispatch('getTasks', payload.listId)
        })
    },

    //#endregion
  }
})

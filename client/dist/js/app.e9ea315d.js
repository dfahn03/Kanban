(function(t){function s(s){for(var a,r,n=s[0],d=s[1],l=s[2],m=0,u=[];m<n.length;m++)r=n[m],o[r]&&u.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(s);while(u.length)u.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,n=1;n<e.length;n++){var d=e[n];0!==o[d]&&(a=!1)}a&&(i.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},o={app:0},i=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=s,n=n.slice();for(var l=0;l<n.length;l++)s(n[l]);var c=d;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("64a9"),o=e.n(a);o.a},"0e29":function(t,s,e){"use strict";var a=e("6146"),o=e.n(a);o.a},"191d":function(t,s){},"1d03":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABNQAAATUBu1YjjwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEgSURBVCiRrZJNTgJBEIVfDRxCvMpUJ7Pv7pXMBpFIIIHgJTwDOxLBBctZAgdQ2ek5usYTEEig3BkYh4l/b9n1vtdVqQL+Q3qP6Ke+CAA0TWvvr/wcXHxdBQZr2vkbP2ma1j5hyrK9RjomokfxPCoDxfOIIp1BMaYs2381WE7F864YIJ5H4nknltPKmYoB4vhOPO/EmWbRS6UBjjsgPEAxB+FGgd7lYj2v/PVYueeJONbc8+Scp3Q9wZq2Al0AMwW6wZr2t+Dg4iGRTqHUaizXPSi1iHQaXDysbDW4eCiOt8Gbq+N3caYpjrdnA4KPB+J4I9bYsnru2YnjTfDx4KRtTZI6HagPRaexelmVwReL9ZKgt3SgviZJ/aT4m9v+kz4AyAZ/P8dYXKoAAAAASUVORK5CYII="},"265c":function(t,s,e){t.exports=e.p+"img/three-lines-icon.79b18a5d.png"},"3b8a":function(t,s,e){"use strict";var a=e("a539"),o=e.n(a);o.a},"3e7b":function(t,s,e){"use strict";var a=e("dd23"),o=e.n(a);o.a},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("router-view")],1)},i=[],r={name:"App"},n=r,d=(e("034f"),e("2877")),l=Object(d["a"])(n,o,i,!1,null,null,null),c=l.exports,m=e("8c4f"),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid boards"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-2 offset-md-2"},[a("button",{staticClass:"btn btn-sm btn-danger mt-2 float-right",on:{click:t.userLogOut}},[t._v("Log Out")]),a("h6",{staticClass:"user-name float-right mr-2 mt-3"},[t._v("@"+t._s(t.user.name))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.addBoard(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Title",required:""},domProps:{value:t.newBoard.title},on:{input:function(s){s.target.composing||t.$set(t.newBoard,"title",s.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"text-center ml-1",attrs:{type:"text",placeholder:"Description",required:""},domProps:{value:t.newBoard.description},on:{input:function(s){s.target.composing||t.$set(t.newBoard,"description",s.target.value)}}}),a("button",{staticClass:"btn btn-success ml-1 mb-1 btn-sm",attrs:{type:"submit"}},[t._v("Create Board")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.showForm?t.showForm?a("button",{staticClass:"btn btn-sm btn-warning mb-2",attrs:{type:"button"},on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Cancel")]):t._e():a("button",{staticClass:"btn btn-sm btn-dark mb-2",attrs:{type:"button"},on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Add\n        Board")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"card-columns"},[t._l(t.boards,function(s){return a("div",{key:s._id,staticClass:"container"},[a("img",{staticClass:"image",attrs:{src:t.getRandomImg(),alt:"Demotivator Image"}}),a("div",{staticClass:"middle"},[a("div",{staticClass:"text"},[a("h5",{staticClass:"open-bug",on:{click:function(e){t.openBoard(s._id)}}},[a("b",[t._v(t._s(s.title))])]),a("p",{staticClass:"open-bug",on:{click:function(e){t.openBoard(s._id)}}},[t._v(t._s(s.description))]),a("img",{staticClass:"del-board-btn",attrs:{src:e("e04a"),alt:"Delete Board",title:"Delete Board"},on:{click:function(e){t.deleteBoard(s._id)}}})])])])}),t._l(t.sharedBoards,function(s){return a("div",{key:s._id,staticClass:"container"},[a("img",{staticClass:"image",attrs:{src:t.getRandomImg(),alt:"Demotivator Image"}}),a("div",{staticClass:"middle"},[a("div",{staticClass:"text"},[a("h5",{staticClass:"open-bug",on:{click:function(e){t.openBoard(s._id)}}},[a("b",[t._v(t._s(s.title))]),a("i",{staticClass:"fas fa-users ml-1"})]),a("p",{staticClass:"open-bug",on:{click:function(e){t.openBoard(s._id)}}},[t._v(t._s(s.description))]),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.deleteBoard(s._id)}}},[t._v("Delete")])])])])})],2)])])},p=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-4 offset-md-4"},[e("h1",{staticClass:"brand"},[t._v("de"),e("span",{staticClass:"brand-mid"},[t._v("Note")]),t._v("vator")])])}],h={name:"Boards",mounted(){this.$store.dispatch("getBoards"),this.$store.dispatch("getSharedBoards")},data(){return{newBoard:{title:"",description:""},showForm:!1}},created(){this.$store.state.user._id||this.$router.push({name:"Login"})},computed:{boards(){return this.$store.state.boards},sharedBoards(){return this.$store.state.sharedBoards},user(){return this.$store.state.user}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)},userLogOut(){this.$store.dispatch("logout")},openBoard(t){this.$router.push({name:"Board",params:{boardId:t}})},getRandomImg(){let t=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpg","7.jpeg","8.jpg","9.jpeg","10.jpg","11.jpeg","12.jpeg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpeg","19.jpg"],s=Math.floor(Math.random()*t.length);return"images/"+t[s]}}},b=h,v=(e("3b8a"),e("191d")),g=e.n(v),w=Object(d["a"])(b,u,p,!1,null,null,null);"function"===typeof g.a&&g()(w);var f=w.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board container-fluid"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-5"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"float-left ml-5 mt-1 text-dark"},[e("b",{staticClass:"boards-link"},[t._v("Boards\n            Home")])])])],1),e("div",{staticClass:"col-2"},[e("button",{staticClass:"btn btn-danger btn-sm mt-1 float-right",on:{click:t.userLogOut}},[t._v("Log Out")]),e("span",{staticClass:"user-name mr-2 float-right"},[t._v("@"+t._s(t.user.name))])])]),e("div",{staticClass:"col d-flex justify-content-center align-items-center"},[e("h1",{staticClass:"board-title"},[t._v(t._s(t.board.title))]),e("div",{staticClass:"dropdown ml-5"},[t._m(1),e("div",{staticClass:"dropdown-menu"},[t.showAddCollabForm?t._e():e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showAddCollabForm=!t.showAddCollabForm}}},[t._v("Add Collaborator")]),t.showForm?t._e():e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Edit\n          Board")]),t.showAddListForm?t._e():e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showAddListForm=!t.showAddListForm}}},[t._v("Create List")])])])]),e("div",{staticClass:"col-12"},[e("h5",{staticClass:"board-desc mr-5 mb-1"},[t._v(t._s(t.board.description))])]),e("div",{staticClass:"col-12 mt-2"},[e("form",{directives:[{name:"show",rawName:"v-show",value:t.showAddCollabForm,expression:"showAddCollabForm"}],on:{submit:function(s){return s.preventDefault(),t.addSharedUser(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"text-center",attrs:{type:"text",placeholder:"User Name"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}}),e("button",{staticClass:"btn btn-sm btn-success ml-1 mb-1 py-1",attrs:{type:"submit"}},[t._v("Add User")])]),t.showAddCollabForm?e("button",{staticClass:"btn btn-sm btn-warning mr-5",on:{click:function(s){t.showAddCollabForm=!t.showAddCollabForm}}},[t._v("\n      Cancel Invite")]):t._e()]),e("div",{staticClass:"col-12 mt-2"},[e("form",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],on:{submit:function(s){return s.preventDefault(),t.editBoard(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boardTitle,expression:"boardTitle"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Edit Board Title"},domProps:{value:t.boardTitle},on:{input:function(s){s.target.composing||(t.boardTitle=s.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boardDescription,expression:"boardDescription"}],staticClass:"text-center ml-1",attrs:{type:"text",placeholder:"Edit Board Description"},domProps:{value:t.boardDescription},on:{input:function(s){s.target.composing||(t.boardDescription=s.target.value)}}}),e("button",{staticClass:"btn btn-success ml-1 mb-1",attrs:{type:"submit"}},[t._v("Submit Changes")])]),t.showForm?e("button",{staticClass:"btn btn-warning mt-1 mr-5",on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Cancel Edit")]):t._e()]),e("div",{staticClass:"col-12 mt-2"},[e("form",{directives:[{name:"show",rawName:"v-show",value:t.showAddListForm,expression:"showAddListForm"}],on:{submit:function(s){return s.preventDefault(),t.addList(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Enter List Name",required:""},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}}),e("button",{staticClass:"btn btn-success ml-1 mb-1 py-1",attrs:{type:"submit"}},[t._v("Add List")])]),t.showAddListForm?e("button",{staticClass:"btn btn-warning mr-5",on:{click:function(s){t.showAddListForm=!t.showAddListForm}}},[t._v("Cancel")]):t._e()]),e("div",{staticClass:"col"},[e("div",{staticClass:"row"},t._l(t.lists,function(t){return e("list",{key:t._id,staticClass:"col-3 mt-4",attrs:{listData:t}})}))])])},_=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-5"},[e("h2",{staticClass:"brand float-left"},[t._v("de"),e("span",{staticClass:"brand-mid"},[t._v("Note")]),t._v("vator")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"btn",attrs:{type:"button",id:"board-dropdown-menu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{staticClass:"board-ddown",staticStyle:{height:"2rem"},attrs:{src:e("265c"),title:"Board Menu"}})])}],k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("drop",{staticClass:"drop",on:{drop:t.handleDrop}},[a("div",{staticClass:"card border-dark mb-3",staticStyle:{"max-width":"30rem"}},[a("div",{staticClass:"card-header text-center pt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex justify-content-center"},[a("h4",[a("b",{staticClass:"ml-3"},[t._v(t._s(t.listData.title))])]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn p-0 ml-2",attrs:{type:"button",id:"list-dropdown-menu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{staticClass:"board-ddown",staticStyle:{height:"1.5rem"},attrs:{src:e("265c"),title:"Board Menu"}})]),a("div",{staticClass:"dropdown-menu"},[t.showAddTaskForm?t._e():a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showAddTaskForm=!t.showAddTaskForm}}},[t._v("Add Note")]),t.showForm?t._e():a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Edit\n                List")]),a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.deleteList}},[t._v("Delete List")])])])])])]),a("div",{staticClass:"card-body text-dark"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],on:{submit:function(s){return s.preventDefault(),t.editList(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listTitle,expression:"listTitle"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Edit List Title"},domProps:{value:t.listTitle},on:{input:function(s){s.target.composing||(t.listTitle=s.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-success mb-1 ml-1 py-1",attrs:{type:"submit"}},[t._v("Submit")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.showForm?a("button",{staticClass:"btn btn-warning",on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Cancel Edit")]):t._e()])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col mt-2"},[a("form",{directives:[{name:"show",rawName:"v-show",value:t.showAddTaskForm,expression:"showAddTaskForm"}],on:{submit:function(s){return s.preventDefault(),t.addTask(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Enter Your Note",required:""},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),a("button",{staticClass:"btn btn-success btn-sm mb-1 ml-1 py-1",attrs:{type:"submit"}},[t._v("Add Note")])])]),a("div",{staticClass:"col-12"},[t.showAddTaskForm?a("button",{staticClass:"btn btn-sm btn-warning mb-2 mt-1",on:{click:function(s){t.showAddTaskForm=!t.showAddTaskForm}}},[t._v("Cancel")]):t._e()])]),a("div",{staticClass:"row"},t._l(t.tasks,function(t){return a("task",{key:t._id,staticClass:"col-12",attrs:{taskData:t}})}))])])])},A=[],y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("drag",{staticClass:"drag task",attrs:{"transfer-data":t.taskData,"effect-allowed":["move"],"drop-effect":"move"}},[a("div",{staticClass:"card border-dark mb-3 justify-content-center",staticStyle:{"max-width":"25rem"}},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex justify-content-center"},[a("h6",{staticClass:"mt-1"},[a("b",[t._v(t._s(t.taskData.description))])]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn p-0 ml-2 align-self-top",attrs:{type:"button",id:"task-dropdown-menu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{staticClass:"board-ddown",staticStyle:{height:"1rem"},attrs:{src:e("265c"),title:"Board Menu"}})]),a("div",{staticClass:"dropdown-menu"},[t.showAddCommentForm?t._e():a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showAddCommentForm=!t.showAddCommentForm}}},[t._v("Add Comment")]),t.showForm?t._e():a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Edit\n                Note")]),a("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.deleteTask}},[t._v("Delete Note")])])])])])]),a("div",{staticClass:"card-body text-dark"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("form",{directives:[{name:"show",rawName:"v-show",value:t.showForm,expression:"showForm"}],on:{submit:function(s){return s.preventDefault(),t.editTask(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskDescription,expression:"taskDescription"}],attrs:{type:"text",placeholder:"Edit Description"},domProps:{value:t.taskDescription},on:{input:function(s){s.target.composing||(t.taskDescription=s.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-success ml-1 mt-1",attrs:{type:"submit"}},[t._v("Submit Changes")])]),t.showForm?a("button",{staticClass:"btn btn-sm btn-warning ml-1 mt-1",on:{click:function(s){t.showForm=!t.showForm}}},[t._v("Cancel\n            Edit")]):t._e()]),a("div",{staticClass:"col-12 mt-1"},[a("form",{directives:[{name:"show",rawName:"v-show",value:t.showAddCommentForm,expression:"showAddCommentForm"}],on:{submit:function(s){return s.preventDefault(),t.addComment(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"text-center",attrs:{type:"text",placeholder:"Your Comment"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}}),a("button",{staticClass:"btn btn-sm btn-success mt-1 ml-1",attrs:{type:"submit"}},[t._v("Add Comment")])]),t.showAddCommentForm?a("button",{staticClass:"btn btn-sm btn-warning ml-1 mt-1 mb-1",on:{click:function(s){t.showAddCommentForm=!t.showAddCommentForm}}},[t._v("Cancel")]):t._e()])]),t._l(t.taskData.comments,function(s){return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"card border-dark mb-3",staticStyle:{"max-width":"20rem"}},[a("div",{staticClass:"card-body text-dark text-center comment-body"},[a("p",{staticClass:"mb-1"},[t._v(t._s(s.content))]),a("p",{staticClass:"author-comment"},[t._v("@"+t._s(s.authorId.name)+" "),a("img",{staticClass:"ml-1 mb-1",attrs:{src:e("1d03"),alt:"Delete Comment",title:"Delete Comment"},on:{click:function(e){t.deleteComment(s._id)}}})])])])])})],2)])])},x=[],B=e("df76"),F={name:"Task",props:["taskData"],data(){return{content:"",taskDescription:"",showForm:!1,showAddCommentForm:!1}},components:{Drag:B["Drag"],Drop:B["Drop"]},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},addComment(){let t={content:this.content,authorId:this.$store.state.user._id};this.taskData.comments.push(t),this.$store.dispatch("editTask",this.taskData),this.content="",this.showAddCommentForm=!1},deleteComment(t){this.taskData.comments=this.taskData.comments.filter(s=>s._id!==t),this.$store.dispatch("editTask",this.taskData)},editTask(){this.taskDescription&&(this.taskData.description=this.taskDescription,this.$store.dispatch("editTask",this.taskData),this.taskDescription="",this.showForm=!1)},changeList(t){let s=this.taskData.listId;this.taskData.listId=t,this.$store.dispatch("moveTask",{task:this.taskData,oldListId:s})}},computed:{lists(){return this.$store.state.lists}}},D=F,L=(e("3e7b"),Object(d["a"])(D,y,x,!1,null,"5a0ab330",null)),T=L.exports,I={name:"Lists",props:["listData"],mounted(){this.$store.dispatch("getTasks",this.listData._id)},data(){return{description:"",listTitle:"",showForm:!1,showAddTaskForm:!1}},computed:{tasks(){return this.$store.state.tasks[this.listData._id]}},components:{Task:T,Drag:B["Drag"],Drop:B["Drop"]},methods:{addTask(){let t={description:this.description,authorId:this.listData.authorId,boardId:this.listData.boardId,listId:this.listData._id};this.$store.dispatch("addTask",t),this.description="",this.showAddTaskForm=!1},deleteList(){this.$store.dispatch("deleteList",this.listData)},editList(){this.listTitle&&(this.listData.title=this.listTitle,this.$store.dispatch("editList",this.listData),this.listTitle="",this.showForm=!1)},handleDrop(t){let s=t.listId;t.listId=this.listData._id,this.$store.dispatch("moveTask",{task:t,oldListId:s})}}},j=I,E=(e("b9c9"),Object(d["a"])(j,k,A,!1,null,"4b12a6d1",null)),N=E.exports,P={name:"Board",props:["boardId"],mounted(){this.$store.dispatch("getLists",this.boardId),this.$store.dispatch("getBoards",this.boardId),this.$store.dispatch("getSharedBoards",this.boardId)},data(){return{title:"",showForm:!1,boardTitle:"",boardDescription:"",userName:"",showAddCollabForm:!1,showAddListForm:!1}},computed:{user(){return this.$store.state.user},board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||this.$store.state.sharedBoards.find(t=>t._id==this.boardId)||{title:"Loading..."}},lists(){return this.$store.state.lists}},components:{List:N},methods:{addList(){let t={title:this.title,boardId:this.boardId,authorId:this.board.authorId};this.$store.dispatch("addList",t),this.title="",this.showAddListForm=!1},editBoard(){this.boardTitle||(this.boardTitle=this.board.title),this.boardDescription||(this.boardDescription=this.board.description);let t={title:this.boardTitle,description:this.boardDescription,_id:this.board._id};this.$store.dispatch("editBoard",t),this.boardTitle="",this.boardDescription="",this.showForm=!1},userLogOut(){this.$store.dispatch("logout")},addSharedUser(){let t={name:this.userName,_id:this.board._id,sharedIds:this.board.sharedIds};this.$store.dispatch("getUserByName",t),this.userName="",this.showAddCollabForm=!1}}},U=P,S=(e("63d9"),Object(d["a"])(U,C,_,!1,null,"04cfb61a",null)),O=S.exports,M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col login"},[e("div",{staticClass:"row login-row justify-content-center align-items-center"},[e("div",{staticClass:"col-5 d-flex justify-content-center align-items-center"},[t._m(0),e("register-modal"),e("login-modal")],1)])])},Y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card text-dark",staticStyle:{width:"40rem"}},[e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title"},[t._v("Welcome to deNOTEvator")]),e("h6",{staticClass:"card-text"},[t._v("deNOTEvator is the best site to utilize the Scrum methodology for your projects\n            through\n            boards, lists and tasks.\n            Sign in for the best inspiration you have ever seen!")]),e("button",{staticClass:"btn btn-sm mt-3 regBtn",attrs:{type:"button","data-toggle":"modal","data-target":"#registerModal",title:"Register"}},[t._v("Register")]),e("button",{staticClass:"btn btn-sm ml-1 mt-3 logBtn",attrs:{type:"button","data-toggle":"modal","data-target":"#loginModal",title:"Login"}},[t._v("Login")])])])}],R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register-modal"},[e("div",{staticClass:"modal fade",attrs:{id:"registerModal",tabindex:"-1",role:"dialog","aria-labelledby":"registerModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"registerInputUsername"}},[t._v("Username:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],staticClass:"form-control text-center",attrs:{type:"text",id:"registerInputUsername",placeholder:"Enter Username"},domProps:{value:t.newUser.username},on:{input:function(s){s.target.composing||t.$set(t.newUser,"username",s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"registerInputEmail"}},[t._v("Email:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control text-center",attrs:{type:"email",id:"registerInputEmail",placeholder:"Enter Email"},domProps:{value:t.newUser.email},on:{input:function(s){s.target.composing||t.$set(t.newUser,"email",s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"registerInputPassword"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control text-center",attrs:{type:"password",id:"registerInputPassword",placeholder:"Enter Password"},domProps:{value:t.newUser.password},on:{input:function(s){s.target.composing||t.$set(t.newUser,"password",s.target.value)}}})]),t._m(1)])])])])])])},V=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"registerModalLabel"}},[t._v("Register")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-footer justify-content-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Create Account")])])}],K={name:"RegisterModal",data(){return{newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser),$("#registerModal").modal("hide"),$(".modal-backdrop").remove()}}},Q=K,H=Object(d["a"])(Q,R,V,!1,null,null,null),J=H.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-modal"},[e("div",{staticClass:"modal fade",attrs:{id:"loginModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.loginUser(s)}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"loginInputEmail"}},[t._v("Email:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"form-control text-center",attrs:{type:"email",id:"loginInputEmail",placeholder:"Enter Email"},domProps:{value:t.creds.email},on:{input:function(s){s.target.composing||t.$set(t.creds,"email",s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label",attrs:{for:"loginInputPassword"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"form-control text-center",attrs:{type:"password",id:"loginInputPassword",placeholder:"Enter Password"},domProps:{value:t.creds.password},on:{input:function(s){s.target.composing||t.$set(t.creds,"password",s.target.value)}}})]),t._m(1)])])])])])])},Z=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"loginModalLabel"}},[t._v("Login")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-footer justify-content-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])])}],q={name:"LoginModal",data(){return{creds:{email:"",password:""}}},methods:{loginUser(){this.$store.dispatch("login",this.creds),$("#loginModal").modal("hide"),$(".modal-backdrop").remove()}}},z=q,X=Object(d["a"])(z,W,Z,!1,null,null,null),G=X.exports,tt={name:"Login",data(){return{}},components:{RegisterModal:J,LoginModal:G}},st=tt,et=(e("0e29"),Object(d["a"])(st,M,Y,!1,null,"55269764",null)),at=et.exports;a["a"].use(m["a"]);var ot=new m["a"]({routes:[{path:"/",name:"Boards",component:f},{path:"/board/:boardId",name:"Board",props:!0,component:O},{path:"/login",name:"Login",component:at},{path:"*",redirect:"/"}]}),it=e("2f62"),rt=e("bc3a"),nt=e.n(rt);a["a"].use(it["a"]);let dt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",lt=nt.a.create({baseURL:dt+"auth/",timeout:3e3,withCredentials:!0}),ct=nt.a.create({baseURL:dt+"api/",timeout:3e3,withCredentials:!0});var mt=new it["a"].Store({state:{user:{},boards:[],sharedBoards:[],lists:[],tasks:{},comments:[]},mutations:{setUser(t,s){t.user=s},setBoards(t,s){t.boards=s},setSharedBoards(t,s){t.sharedBoards=s},setLists(t,s){t.lists=s},setTasks(t,s){a["a"].set(t.tasks,s.listId,s.results)},setComments(t,s){t.comments=s}},actions:{register({commit:t,dispatch:s},e){lt.post("register",e).then(s=>{t("setUser",s.data),ot.push({name:"Boards"})})},authenticate({commit:t,dispatch:s}){lt.get("authenticate").then(s=>{t("setUser",s.data),"Board"!==ot.currentRoute.name&&ot.push({name:"Boards"})}).catch(t=>{ot.push({name:"Login"})})},login({commit:t,dispatch:s},e){lt.post("login",e).then(s=>{t("setUser",s.data),ot.push({name:"Boards"})})},async logout({commit:t,dispatch:s}){await lt.delete("logout"),t("setUser",{}),ot.push({name:"Login"})},async getUserByName({commit:t,dispatch:s},e){try{let t=await lt.get(e.name);e.sharedIds.push(t.data[0]._id),s("editBoard",e)}catch(a){console.error(a)}},getBoards({commit:t,dispatch:s}){ct.get("boards").then(s=>{t("setBoards",s.data)})},async getSharedBoards({commit:t,dispatch:s}){try{let s=await ct.get("boards/shared");t("setSharedBoards",s.data)}catch(e){console.error(e)}},async getBoardById({commit:t,dispatch:s},e){try{let s=await ct.get("boards/"+e);t("setActiveBoard",s.data)}catch(a){console.error(a)}},addBoard({commit:t,dispatch:s},e){ct.post("boards",e).then(t=>{s("getBoards")})},deleteBoard({commit:t,dispatch:s},e){ct.delete("boards/"+e).then(t=>{s("getBoards")})},async editBoard({commit:t,dispatch:s},e){try{await ct.put("boards/"+e._id,e),s("getBoards")}catch(a){console.error(a)}},async getLists({commit:t,dispatch:s},e){try{let s=await ct.get("boards/"+e+"/lists");t("setLists",s.data)}catch(a){console.error(a)}},async addList({commit:t,dispatch:s},e){try{await ct.post("lists",e),s("getLists",e.boardId)}catch(a){console.error(a)}},deleteList({commit:t,dispatch:s},e){ct.delete("lists/"+e._id).then(t=>{s("getLists",e.boardId)})},async editList({commit:t,dispatch:s},e){try{await ct.put("lists/"+e._id,e),s("getLists",e.boardId)}catch(a){console.error(a)}},async getTasks({commit:t,dispatch:s},e){try{let s=await ct.get("lists/"+e+"/tasks");t("setTasks",{listId:e,results:s.data})}catch(a){console.error(a)}},async addTask({commit:t,dispatch:s},e){try{await ct.post("tasks",e),s("getTasks",e.listId)}catch(a){console.error(a)}},async editTask({commit:t,dispatch:s},e){try{await ct.put("tasks/"+e._id,e),s("getTasks",e.listId)}catch(a){console.error(a)}},async moveTask({commit:t,dispatch:s},e){try{await ct.put("tasks/"+e.task._id,e.task),s("getTasks",e.task.listId),e.oldListId&&s("getTasks",e.oldListId)}catch(a){console.error(a)}},deleteTask({commit:t,dispatch:s},e){ct.delete("tasks/"+e._id).then(t=>{s("getTasks",e.listId)})}}});a["a"].config.productionTip=!1,new a["a"]({router:ot,store:mt,created(){this.$store.dispatch("authenticate")},render:t=>t(c)}).$mount("#app")},6146:function(t,s,e){},"63d9":function(t,s,e){"use strict";var a=e("de9d"),o=e.n(a);o.a},"64a9":function(t,s,e){},"9ea7":function(t,s,e){},a539:function(t,s,e){},b9c9:function(t,s,e){"use strict";var a=e("9ea7"),o=e.n(a);o.a},dd23:function(t,s,e){},de9d:function(t,s,e){},e04a:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB50lEQVRIx+1XyytEURj/eSQbzdxH5JFEKa+VkklKIaUowsojj2bFTomSFGXBlJW8UiIrS1v+CjvFvTPNv8Hvu92p2zSje+69hoVTX/fMefx+53uc73wD/Le/2jI6mqwYWr0iYz9G+AlUWgbu0gaOConMyZrIidMaekiwXnTewIatoTusdhW2jl1Lx4Vt4Cyt41xVuP9KMATLN7GlYYsyEdZKPPgsyTdVzHpLn40EFQZbIquhmcRdor2Kxs/FgkhV6PcX38Q0z2MYjb0iWCrEKW4ajsDHo8Q6Vonqcm64Fj9lTLQTYIYmG3T9P06/rb0CVSLsr8qY66IBrp2zY2h7j6OF/UtilfkmFkAS31gmenPR7f3KuG2iQeTbNcQQLP+mNrAjmSgssYNhYNv/deIVoJmSoYmJoXSd6M9DmukkAlOniHXgPxpj0Hjapwg0fmKQxVWvQtLd3BnG1EHuoEPM9Nf/K8SeNFpaYgbIWEmJSbjCJN/3YaCD36m0iSH3wZ+WufcWVIuwvyzzDiHTLA8z6bxK3CsZLkhtlSDQQq4wyM9shfre39y7FCjfS/1EbR6Yh+cDvEqLzH73StWHt73VoZbmOnXLmT23MikuOvadcomJI1sDM5piz0BjflmbLx8m6v//APy59gXIL6C9KviZWAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.e9ea315d.js.map
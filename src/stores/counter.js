import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const users = defineStore('post', {
  state : () =>{
    return{
      users : [] ,
      posts : [] ,
    }
  } ,

  getters : {
    allUsersGettersCounter (state){
      return state.users
    },
    allPostsGettersCounter (state){
      return state.posts
    },
  } ,

  actions : {
    async fetchAllUsers() {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
          const responseData = await response.json();
          this.users = responseData;
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async fetchOneUser(user) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
          const responseData = await response.json();
          this.users = responseData;
          
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async fetchAllPosts() {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
          const responseData = await response.json();
          this.posts = responseData;
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async fetchOnePost(post) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
          const responseData = await response.json();
          this.posts = responseData;
          console.log(post);
          console.log(this.posts);
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async deletePost(post) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}` , {
            method: 'DELETE',
          })
          const responseData = await response.json();
          Swal.fire({
            title: 'post deleted!',
            icon: 'success',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: "top",
            })
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async editPost(post) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}` , {               
              method: 'PUT',
              body: JSON.stringify({
              title: post.title ,
              body: post.body ,
              }),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
              },
          })
          const responseData = await response.json()
          Swal.fire({
              title: 'Post updated!',
              icon: 'success',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 3000,
              toast: true,
              position: "top",
          })
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }
    },
    async createPost([postTitle , postBody]) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts` , {
              method : 'POST' ,
              body: JSON.stringify({
                  title : postTitle,
                  body : postBody,
              }),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
          const responseData = await response.json();
          Swal.fire({
              title: 'post added!',
              icon: 'success',
              showConfirmButton: false,
              timerProgressBar: true,
              timer: 3000,
              toast: true,
              position: "top",
              })
      } catch (error) {
          Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
          })
      }

    },

  }
})

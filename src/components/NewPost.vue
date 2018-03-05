<template>
  <div>
    <h1>New Post</h1>
    <form class="post-form" method="post" @submit.prevent="postPost">
      <input type="text" id="post-title" class="post-title" placeholder="Post title">
      <textarea v-model="postBody" name="post-content" id="post-content" class="post-content" cols="30" rows="10"
                placeholder="Post Content"></textarea>
      <button type="submit" class="post-button">Submit Post</button>
    </form>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      postBody: '',
      errors: []
    }
  },

  methods: {
    postPost () {
      axios.post(`http://localhost/wpcomp/wp/wp-json/wp/v2/posts`, {
        title: this.postBody
      },
      {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dwY29tcFwvd3AiLCJpYXQiOjE1MjAxMTYyNDAsIm5iZiI6MTUyMDExNjI0MCwiZXhwIjoxNTIwNzIxMDQwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.l5Wt5WQ0-q2IjRi8XM2V7On3BhsCetofEEsmv-hr2NU'
        }
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .post-form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .post-form .post-title,
  .post-form .post-content {
    padding: .5rem 1rem;
    font-size: 1rem;
  }

  .post-form .post-button {
    padding: 1rem;
    background: #47BB83;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }

</style>

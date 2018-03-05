<template>
  <div>
    <h1>New Post</h1>
    <transition name="fade">
      <form v-if="show" class="post-form" method="post" @submit.prevent="postPost">
        <input v-model="postTitle" type="text" id="post-title" class="post-title" placeholder="Post title">
        <textarea v-model="postContent" name="post-content" id="post-content" class="post-content" cols="30" rows="10"
                  placeholder="Post Content"></textarea>
        <button v-on:click="show=!show" type="submit" class="post-button">Submit Post</button>
      </form>
    </transition>
    <transition name="fade">
      <p v-if="!show">Post sent</p>
    </transition>
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
      postTitle: '',
      postContent: '',
      show: true,
      errors: []
    }
  },

  methods: {
    postPost () {
      axios.post(`http://localhost/wpcomp/wp/wp-json/wp/v2/posts`, {
        title: this.postTitle,
        content: this.postContent
      },
      {
        headers: {
          Authorization: 'Bearer replace-with-token' // generate a token /wp-json/jwt-auth/v1/token
        }
      })
        .then(response => {
          console.log('post sent')
        })
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

  /**
   * Fade
   */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>

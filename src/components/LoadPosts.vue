<template>
  <div>
    <section v-if="posts && posts.length">
      <div v-for="post of posts" :key="post">
        <article>
          <h1 :key="post.title">
            <a :href="post.link" target="_blank">{{post.title.rendered}}</a>
          </h1>
          <div v-html="post.excerpt.rendered"></div>
        </article>
      </div>
    </section>
    <!-- if errors -->
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
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get(`http://localhost/wpcomp/wp/wp-json/wp/v2/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
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

</style>

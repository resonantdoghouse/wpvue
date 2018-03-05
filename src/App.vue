<template>
  <div id="app">
    <a href="/#/">
      <img src="./assets/logo.png">
    </a>
    <nav class="main-nav">
      <ul class="nav-links">
        <li class="nav-links__item"><a class="item__link" href="/#/posts">Posts</a></li>
        <li class="nav-links__item"><a class="item__link" href="/#/new-post">New Post</a></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.wp-vue {
  max-width: 600px;
  margin: auto;
}

.main-nav {
  padding: 0;
}
.nav-links {
  list-style: none;
  background: #35485E;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.nav-links__item {
  color: white;
}
.item__link {
  color: white;
  text-decoration: none;
  background: #35485E;
  padding: 1rem;
  display: block;
}
.item__link:hover {
  background: #4c6e8e;
}
</style>

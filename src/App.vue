<template>
  <div id="app">
    <img src="./assets/logo.png">
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
  margin-top: 60px;
}

.main-nav {
  padding: 0;
}
.nav-links {
  list-style: none;
  background: #35485E;
  display: flex;
}
.nav-links__item {
  color: white;
  padding: 1rem;
}
.item__link {
  color: white;
  text-decoration: none;
}
</style>

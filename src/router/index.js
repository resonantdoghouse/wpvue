import Vue from 'vue'
import Router from 'vue-router'
import LoadPosts from '@/components/LoadPosts'
import NewPost from '@/components/NewPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadPosts',
      component: LoadPosts
    },
    {
      path: '/posts',
      name: 'LoadPosts',
      component: LoadPosts
    },
    {
      path: '/new-post',
      name: 'NewPost',
      component: NewPost
    }
  ]
})

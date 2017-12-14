import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users'
import edit from '../components/edit'
import add from '../components/add'
import view from '../components/view'
import dlt from '../components/delete.vue'
import dlt_fail from '../components/delete_fail.vue'
import threads from '../components/Threads.vue'
import thread_view from '../components/thread_view.vue'
import tags from '../components/Tags.vue'
import tag_add from '../components/tag_add.vue'
import tag_view from '../components/tag_view.vue'
import tag_edit from '../components/tag_edit.vue'
import tag_delete from '../components/tag_delete.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Users
    },
    {
    	path: '/user/edit/:user_id',
    	component: edit
    },
    {
    	path: '/user/detail/:user_id',
    	component: view
    },
    {
    	path: '/user/delete/:user_id',
    	component: dlt
    },
    {
    	path: '/user/delete_fail',
    	component: dlt_fail
    },
    {
        path: '/user/add',
        component: add
    },
    {
        path: '/threads',
        component: threads
    },
    {
        path: '/thread/detail/:post_id',
        component: thread_view
    },
    {
        path: '/tags',
        component: tags
    },
    {
        path: '/tag/add',
        component: tag_add
    },
    {
        path: '/tag/detail/:label_id',
        component: tag_view
    },
    {
        path: '/tag/edit/:label_id',
        component: tag_edit
    },
    {
        path: '/tag/delete/:label_id',
        component: tag_delete
    },
  ]
})
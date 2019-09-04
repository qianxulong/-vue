import Vue from 'vue'
import Router from 'vue-router'
import Vcourse from '@/components/v-course'
import detail from '@/components/detail'
import login from '@/components/Vlogin'
import micro from '@/components/Micro'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/course',
            name: 'course',
            component: Vcourse,
        },
        {
            path: '/course/:id',
            name: "detail",
            component: detail,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login/',
            name: "login",
            component: login
        },
         {
            path: '/micro',
            name: "micro",
            component: micro
        },


    ]
})

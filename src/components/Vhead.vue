<template>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">主页</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li v-for="(item,index) in routes" :class="{active:index==CurrentIndex}"
                        @click="HandleClick(index)">
                        <router-link :to="item.url">{{item.title}}</router-link>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
                    <div class="form-group">
                        <div v-if="this.$store.state.token">
                            <a>{{this.$store.state.username}}</a>
                            <a @click="logout">注销</a>
                        </div>
                        <div v-else>
                            <router-link to="/login">登录</router-link>
                        </div>
                    </div>
                </form>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>

</template>
<script>

    import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        name: 'Vhead',
        data() {
            return {
                routes: [{title: "我的课程", url: '/course'},
                    {title: "我的micro", url: '/micro'},

                ],
                CurrentIndex: -1,
            }
        },
        methods: {
            HandleClick(index) {
                this.CurrentIndex = index;
            },
            logout() {
                this.$store.commit('clearToken')
            }
        },
        created() {

            for (var i = 0; i < this.routes.length; i++) {
                if (this.routes[i].url == this.$route.path) {
                    this.CurrentIndex = i;
                }
            }
        },
        mounted() {

        },


    }
</script>
<style>

</style>
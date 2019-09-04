<template>
    <div class="login">
        <div>用户名:<input type="text" v-model="username"></div>
        <div>密码:<input type="password" v-model="password"></div>
        <input type="button" value="登录" @click="Login">
    </div>

</template>


<script>

    export default {
        name: "login",
        data() {
            return {
                username: null,
                password: null,

            }
        },
        methods: {
            Login() {
                alert(this.username)
                var _this = this;
                this.$axios.request({
                    url: "http://127.0.0.1:8000/api/v1/login/",
                    method: "POST",
                    data: {user: _this.username, pwd: _this.password},
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(function (data) {
                    if (data.data.code === 1001) {

                        console.log(data.data.token, _this.username)
                        _this.$store.commit('saveToken', {token: data.data.token, username: _this.username})

                        var url = _this.$route.query.backUrl

                        console.log(url)
                        if (url) {
                            _this.$router.push({path: url})
                        } else {
                            _this.$router.push({path: '/course'})
                        }
                    } else {
                        console.log(data.data.error)
                    }
                }).catch(function (data) {
                    console.log("后端或前端错误")
                })

            }

        }
    }
</script>
<template>
    <ul class="list-group">
        <li v-for="course in courses" class="list-group-item">
            <router-link :to = "{name:'detail',params:{id:course.id}}">{{course.title}}</router-link>
            <p>{{course.level}}</p>

        </li>


    </ul>
</template>


<script>
    import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        name: "Vcourse",
        data() {
            return {
                courses: null
            }
        },
        methods: {
            ShowCourses() {
                var _this = this;
                this.$axios.request({
                    url: "http://127.0.0.1:8000/api/v1/course/",
                    method: 'GET'
                }).then(function (ret) {
                    if (ret.data.code === 1001) {
                        _this.courses = ret.data.data
                    }

                }).catch(function (ret) {
                    alert(ret.error)
                })
            }
        },
        mounted(){
            this.ShowCourses()
        }
    }
</script>


<style></style>
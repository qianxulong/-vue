<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{course_detail.title}}</div>
        <div class="panel-body">
            <p>口号：{{course_detail.slogan}}</p>
            <p>水平：{{course_detail.level}}</p>
            <p>为什么：{{course_detail.why}}</p>
            <div>课程计划：
                <ul>
                    <li v-for="chapter in course_detail.chapter"><a href="">{{chapter.name}}</a></li>
                </ul>
            </div>
            <div>推荐课程：
                <ul>
                    <li v-for="course in course_detail.recommend" @click="ChangeCourse(course.id)">{{course.title}}
                    </li>
                </ul>
            </div>


        </div>
    </div>

</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                course_detail: {
                    course: null,
                    img: null,
                    level: null,
                    slogan: null,
                    title: null,
                    why: null,
                    chapter: [],
                    recommend: [],
                }
            }
        },
        methods: {
            init(nid) {
                var _this = this;

                _this.$axios.request({
                    url: "http://127.0.0.1:8000/api/v1/course/" + nid,
                    method: "GET"
                }).then(function (ret) {
                    if (ret.data.code === 1001) {
                        _this.course_detail = ret.data.data

                    }
                }).catch(function (ret) {
                    console.log("发生错误")
                })
            },
            ChangeCourse(id) {
                alert(id);
                this.init(id);
                this.$router.push({name: 'detail', params: {id: id}})

            }
        },
        mounted() {
            var nid = this.$route.params.id
            this.init(nid)
        }
    }
</script>

<style>

</style>
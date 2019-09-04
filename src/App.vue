<template>
    <div id="app">
        <Vhead></Vhead>
        <router-view/>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Vhead from './components/Vhead'

    export default {
        name: 'App',
        components: {
            Vhead
        },

        mounted() {


        }
    }
</script>

<style>

</style>

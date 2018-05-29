<template>
<div>
    <div v-for="tech in technologies" :key="tech.id" class="technology">
        <h2> {{ tech.name }} </h2>
        <h3> {{ tech.description }} </h3>
        <br>
        <nuxt-link :to="{path:'/technologies/' + tech.id}"> see details</nuxt-link>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: mapState(['technologies'])
    
    
}
</script>
<style>
.technology {
    border: 1px solid red;
    padding: 5px;
    margin: 5px;
}

</style>


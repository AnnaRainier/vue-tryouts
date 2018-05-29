<template>
<div class="card details">
        <div class="card-body">
            <h4 class="card-title"> {{ product.title }} </h4>
            <p class="card-text"> {{ product.qt }} items for ${{ product.price }} </p>
            <router-link :to="{name:'home'}">go to list</router-link>
        </div>
    </div>
</template>

<script>
import ProductService from './ProductService';

export default {
    props: ['static text'],
    data() {
        return {
            product: {}
        }
    },
    beforeCreate() {
        console.log('before create');
    },
    mounted() {
        this.loadProduct(this.$route.params.id)
    },
    watch: {
        '$route.params.id': (id) => {
            this.loadProduct(id)
        }
    },
    methods: {
        loadProduct(id) {
            this.$http.get('https://5b0d61788126c90014997602.mockapi.io/products/' + id)
        .then(response => {
            console.log(response);
            this.product = response.data;
        })
        .catch(error => {
            console.log(error)
        })
        }
    }
    
}
</script>
<style>
.details {
    width: 400px;
    float: right;
    vertical-align: top;
  }
</style>


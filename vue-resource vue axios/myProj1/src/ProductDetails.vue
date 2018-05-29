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
    created() {
        ProductService.$on("viewDetails", (selectedProduct) => {
            this.product = selectedProduct;
            console.log(this.product);
        })
    },
    mounted() {
        ProductService.viewDetails(this.$route.params.id);
    },
    watch: {
        '$route.params.id': (id) => {
            ProductService.viewDetails(id);
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


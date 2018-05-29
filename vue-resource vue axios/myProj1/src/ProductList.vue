<template>
    <div>
        <router-link to="/add?text=hi" class="btn btn-success">Add product</router-link>
        <product-item v-for="(product, i) in products" :key="product.id"
         :product="product" :index="(i + 1)"></product-item>
    </div>
    
</template>

<script>
    import ProductItem from './ProductItem.vue';
    import _ from 'lodash';

export default {
    data() {
        return {
            products: []
        }
    },
    components: {
        ProductItem
    },
    created() {
        // axios.get('https://5b0d61788126c90014997602.mockapi.io/products')
        // .then(response => {
        //     console.log(response);
        //     this.products = response.data;
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        this.$http.get('https://5b0d61788126c90014997602.mockapi.io/products')
        .then(response => {
            console.log(response);
            this.products = response.data;
        })
        .catch(error => {
            console.log(error)
        })
    }
    
}
</script>


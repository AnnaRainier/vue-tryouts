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
    import ProductService from './ProductService';
    import { mapGetters, mapActions, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
    //     ...mapGetters({  //spread operator
    //     products: 'getProducts'
    // })
    ...mapState(['products'])
    },
    methods: {
        ...mapActions(['loadProducts'])
    },
    // computed: {
    //     products() {
    //         //return this.$store.state.products
    //         return this.$store.getters.getProducts;
    //     }
    // },
    components: {
        ProductItem
    },
    created() {
       // this.products = ProductService.products;
       //this.$store.commit('loadProducts', ProductService.products) //вызов мутации, но т.к. она выполн.синхронно, она нам не подходит
       //this.$store.dispatch('loadProducts', ProductService.products) //вызов экшена. его задача - подготовить данные для мутации
       this.loadProducts(ProductService.products)
    }
    
}
</script>


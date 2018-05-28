<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title"> {{ index }} {{ product.title }} </h4>
            <p class="card-text"> {{ product.qt }} items for ${{ product.price }} </p>
            <a class="btn btn-primary" @click="viewDetailsClicked"> View Details </a>
        </div>
    </div>
</template>
<script>
import ProductService from './ProductService';

export default {
    data() {
        return {

        }
    },
    props: {
        product: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        viewDetailsClicked () {
            //this.$emit("viewDetails", this.product);
            //this.viewDetails(this.product)
            //ProductService.viewDetails(this.product);
            //this.$router.push('/detail/' + this.product.id)
            this.$router.push({name:'product-details', params: {id: this.product.id}});
        }
    }
    
}
</script>

<style scoped>
    .card-body {
        width: 500px;
        border: 1px solid red;
        border-radius: 4px;
        margin: 2px;
        padding: 2px;
    }
</style>



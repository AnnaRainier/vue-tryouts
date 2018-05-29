<template>
<form class="prod-add">
    <h2>Add new product</h2>
  <div class="form-group">
    <label for="title">Title {{ $route.query.text }}</label>
    <input type="text" class="form-control" id="title" aria-describedby="" placeholder="title" v-model="product.title">
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="number" class="form-control" id="price" placeholder="price" v-model="product.price">
  </div>
  <div class="form-group">
    <label for="quantity">Quantity</label>
    <input type="number" class="form-control" id="quantity" placeholder="quantity" v-model="product.quantity">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="addProd">Submit</button>
</form>
    
</template>

<script>
import ProductService from './ProductService';

export default {
    data() {
        return {
            product: {}
        }
    },
    methods: {
        addProd() {
            ProductService.addProduct(this.product.title, this.product.price, this.product.quantity)
            this.$router.push('/');
            //this.$router.push({name:'product-details', params: {id: this.product.id}});
        }
    }
    
}
</script>

<style>
.prod-add {
    border: 1px solid red;
    width: 400px;
    float: right;
    vertical-align: top;
    margin: 2px;
    padding: 2px;
    border-radius: 4px;
  }

</style>



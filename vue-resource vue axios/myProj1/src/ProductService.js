import Vue from 'vue';
import _ from 'lodash';

export default new Vue({
    //mockapi https://5b0d61788126c90014997602.mockapi.io/products
    data: {
        products: [
            {
                id: 1,
                title: 'Product #1',
                price: 50,
                qt: 1000
            },
            {
                id: 2,
                title: 'Product #2',
                price: 110,
                qt: 456
            },
            {
                id: 3,
                title: 'Product #3',
                price: 300,
                qt: 222
            },
            {
                id: 4,
                title: 'Product #4',
                price: 540,
                qt: 10
            }
        ]
    },
    methods: {
        viewDetails (id) {
            let productToView = _.find(this.products, {id: parseInt(id)})
            this.$emit("viewDetails", productToView)
        },
        addProduct (title, price, quantity) {
            let newProd = {};
            newProd.id = Date.now();
            newProd.title = title;
            newProd.price = price;
            newProd.qt = quantity;
            this.products.push(newProd);
        }
    }
});
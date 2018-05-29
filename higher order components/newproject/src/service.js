import Vue from 'vue';
import _ from 'lodash';

export default new Vue({
    data: {
        products: [{
            id: 1,
            title: 'prod 1',
            price: 50,
            qt: 1000
        },
        {
            id: 2,
            title: 'prod 2',
            price: 30,
            qt: 5000
        },
        {
            id: 3,
            title: 'prod 3',
            price: 450,
            qt: 600
        },
        {
            id: 4,
            title: 'prod 4',
            price: 10,
            qt: 40
        }],
        users: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'blabla2'
        },
        {
            date: '2016-05-02',
            name: 'Dan',
            address: 'blabl11111'
        },
        {
            date: '2016-05-02',
            name: 'Julia',
            address: 'blagffgja2'
        },
        {
            date: '2016-05-01',
            name: 'Sam',
            address: 'vfgdgt'
        }
    ]
    },
    methods: {
        deleteUser(index) {
            this.users.splice(index, 1)
        },
        deleteProduct(index) {
            this.products.splice(index, 1)
        }
    }
})
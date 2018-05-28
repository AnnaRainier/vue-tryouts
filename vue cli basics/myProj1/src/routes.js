import ProductList from './ProductList.vue';
import ProductDetails from './ProductDetails.vue';
import ProductAdd from './ProductAdd';

export const routes = [
    {
        path: '/',
        component: ProductList,
        name: 'home'
    },
    {
        path: '/add',
        component: ProductAdd
    },
    {
        path: '/detail/:id',
        component: ProductDetails,
        name: 'product-details',
        //props: true
        props: {staticText: 'some text'}
    },
    {
        path: '*',
        component: ProductList
    }
]
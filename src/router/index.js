import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/components/page/goodsList'
import Cart from '@/components/page/Cart'
import Address from '@/components/page/address'
import OrderConfirm from '@/components/page/orderConfirm'
import OrderSuccess from '@/components/page/orderSuccess'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ]
})

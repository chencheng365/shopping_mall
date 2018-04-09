<template>
  <div>
  <nav-header></nav-header>
  <nav-bread>
    <!-- 此处使用插槽，如果有多个 slot='slot-name' -->
    <span>order Success</span>
  </nav-bread>
  <div class="container">
    <div class="page-title-normal">
      <h2 class="page-title-h2"><span>check out</span></h2>
    </div>
    <!-- 进度条 -->
    <div class="check-step">
      <ul>
        <li class="cur"><span>Confirm</span> address</li>
        <li class="cur"><span>View your</span> order</li>
        <li class="cur"><span>Make</span> payment</li>
        <li class="cur"><span>Order</span> confirmation</li>
      </ul>
    </div>

    <div class="order-create">
      <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
      <div class="order-create-main">
        <h3>Congratulations! <br>Your order is under processing!</h3>
        <p>
          <span>Order ID：100000001</span>
          <span>Order total：1000</span>
        </p>
        <div class="order-create-btn-wrap">
          <div class="btn-l-wrap">
            <!-- <a href="javascript:;" class="btn btn--m">Cart List</a> -->
            <router-link class="btn btn--m" to="/cart">Cart List</router-link>
          </div>
          <div class="btn-r-wrap">
            <!-- <a href="javascript:;" class="btn btn--m">Goods List</a> -->
            <router-link class="btn btn--m" to="/">Goods List</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/components/common/Header'
import NavFooter from '@/components/common/footer'
import NavBread from '@/components/common/NavBread'

export default {
  components:{
    NavHeader,
    NavFooter,
    NavBread
  }
}
</script>

<style>

</style>

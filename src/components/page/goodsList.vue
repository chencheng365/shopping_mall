<template>
  <div>
      <nav-header></nav-header>
      <nav-bread>
        <!-- 此处使用插槽，如果有多个 slot='slot-name' -->
        <span>Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="reverseGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
                <dd v-for="(price,index) in priceFilter" :key="index">
                  <a href="javascript:void(0)"  @click="setPriceFilter(index)" :class="{'cur':index==priceChecked}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="good in goodList" :key="good.productId">
                    <div class="pic">
                      <a href="#"><img v-lazy="'../../.././static/' + good.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{good.productName}}</div>
                      <div class="price">{{good.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:void(0);" class="btn btn--m" @click="addToCart(good)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Modal :mdShow="mdShowCart" @close="mdShowCart=false">
      <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>        
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShowCart=false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </Modal>      
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>  
  <nav-footer></nav-footer>
  </div>
</template>

<script>
import '../.././assets/css/base.css'
import '../.././assets/css/product.css'

import NavHeader from '@/components/common/Header'
import NavFooter from '@/components/common/footer'
import NavBread from '@/components/common/NavBread'
import Modal from '@/components/common/Modal'
import axios from 'axios'

export default {
  data(){
    return {
      goodList:[],
      priceFilter:[
        {
          startPrice:'0.00',
          endPrice:'500.00'
        },
        {
          startPrice:'500.00',
          endPrice:'1000.00'
        },
        {
          startPrice:'1000.00',
          endPrice:'2000.00'
        }
      ],
      priceChecked:'all',
      filterBy:false,
      overLayFlag:false,
      mdShowCart:false
    }
  },
  components:{
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  mounted(){
    this.getGoodList();
  },
  methods:{
    getGoodList(){
      axios.get("https://www.easy-mock.com/mock/5a9e6826430ae46225384d8a/example/goodlist")
      .then(result=>{
        this.goodList=result.data.result
      })
      .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
      })
    },
    showFilterPop(){
      this.filterBy=true,
      this.overLayFlag=true
    },
    setPriceFilter(index){
      this.priceChecked = index;
      this.closePop();
    },
    closePop(){
      this.filterBy=false,
      this.overLayFlag=false
    },
    reverseGoods(){
      return this.goodList.reverse();
    },
    addToCart(good){
      console.log(good);
      this.mdShowCart=true;
    }
  }
}
</script>

<style>

</style>

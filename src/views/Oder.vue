<template>
<div class="oder">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div id="oder_d2">
      遇见奶茶
    </div>
    <div class="oder_d1">
      <a href="#oder_1">推荐</a><br>
      <a href="#oder_2">原叶纯茶</a><br>
      <a href="#oder_3">鲜冰淇淋</a><br>
      <a href="#oder_4">芝士奶盖</a><br>
      <a href="#oder_5">提神咖啡</a><br>
      <a href="#oder_6">零食小吃</a><br>
      <a href="#oder_7">特调甜品</a><br>
    </div>
    <div class="oder_d4">
      <div class="oder_d5">
        <img src="../assets/zhishi.jpg" alt="">
        <span class="oder_s2">芝士奶盖绿茶</span>
        <span class="s1">￥{{p1}}</span>
        <div class="oder_s1">
          <button @click="jian()">-</button>
          <span>{{value1}}</span>            
          <button @click="jia()">+</button>              
        </div>
      </div>
    </div>



    





  <van-goods-action>
  <van-goods-action-icon icon="shop-o" text="总价" />
  <span>￥{{price}}</span>
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
    



   <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/oder">点单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" replace to="/login">我的</van-tabbar-item>
  <van-tabbar-item icon="setting-o" replace to="/seting">设置</van-tabbar-item>
</van-tabbar>
</div>


</template>


<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      active:1,
       value: '',
       value1:0,
       price:0,
       value2:0,
       value3:0,
       p1:10,
       p2:20,
       p3:30
    }
  },
   methods: {
    onClickButton() {
      this.$router.replace('/adresslist')
    },
    jia(){
      this.value1++;
      this.price=this.value1*this.p1;
    },
    jian(){
      if(this.value1>0){
        this.value1--;
        this.price=this.value1*this.p1;
      }
    }
  }
};
</script>

<style scoped>
 #oder_d2{
   width: 414.4px;
   height: 200px;
   background-image: url('../assets/ml.jpg');
   background-size: 100% auto;
   font-size: 24px;
   font-weight: bolder;
   position: fixed;
   margin-top: 50px;
   text-align: center;
   line-height: 90px;
 }
 .oder_d1 a{
   margin-bottom: -16px;
   display: block;
   background-color: whitesmoke;
   height:50px ;
   text-align: center;
   line-height: 50px;
 }
 .oder_d1{
   width: 90px;
   display: inline-block;
   position: fixed;
   margin-top: 250px;
 }
 .oder_d4{
   float: right;
   margin-top: 254px;
 }
 .oder_d4 div{
   width: 324px;
   height: 100px;
 }
 .van-search{
   position: fixed;
   width: 100%;
 }
 a:hover{
   background-color: white;
   color: black;
   font-weight: bolder;
 }
 a:visited{
   color: black;
 }
 .oder_d4 img{
   width: 30%;
   height: 100%;
   margin-left: 10px;
 }
 .oder_d5 .oder_s2{
   margin-right:95px;
   float: right;
   margin-top: 5px;
 }
 .oder_d5 .van-stepper{
   width: 100px;
   height: 20px;
   position: relative;
   top: -25px;
   right: -210px;
 }
 .s1{
   position: relative;
   top: -27px;
   left: 110px;
 }



  .oder_d41{
   float: right;
 }
 .oder_d41 div{
   width: 324px;
   height: 100px;
 }
  .oder_d41 img{
   width: 30%;
   height: 100%;
   margin-left: 10px;
 }
 .van-goods-action{
   margin-bottom: 50px;
 } 
.oder_s1{
  margin-left: 180px;
  display: inline;
  position: relative;
  top: -23px;
}
.oder_s1 button{
  border-radius: 50%;
  background: white;
}
</style>
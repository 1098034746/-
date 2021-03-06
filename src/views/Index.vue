<template>
<div id="index">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../assets/cha1.jpg"></van-swipe-item>
  <van-swipe-item><img src="../assets/cha2.jpg"></van-swipe-item>
  <van-swipe-item><img src="../assets/cha3.jpg"></van-swipe-item>
  <van-swipe-item><img src="../assets/cha4.jpg"></van-swipe-item>
</van-swipe>

<div id="index_d2">
  <div class="index_d1">
    <img src="../assets/login1.png" alt="">
    <p>现在下单</p>
  </div>
  <div class="index_d1" id="index_d3">
    <img src="../assets/login2.png" alt="">
    <p>为他点单</p>
  </div>
</div>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/oder">点单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" replace to="/login">我的</van-tabbar-item>
  <van-tabbar-item icon="setting-o" replace to="/seting">设置</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
      data(){
        return{
           active: 0
        }
      },
      methods:{

      }

}
</script>

<style scoped>
#index_d2 p{
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 800;
}
#index_d2>:last-child{
  float:right;
  margin-right: 50px;
}
#index_d2>:first-child{
  margin-left: 50px;
}
.index_d1>img{
  width: 100%;
  border-radius: 50%;
  margin-top: 25px;
}
.index_d1{
  width: 100px;
  height: 100px;
  border: 0px;
  float: left;
}
.mint-swipe img{
  width: 100%;
  height: 100%;
}
 #index>.mint-swipe{
   height: 200px;
 }
 #index .mint-tabbar{
   height: 50px;
   background-color:transparent;
 }
  #index .mint-tabbar>.mint-tab-item{
   background-color:transparent;
   line-height: 50px;
 }
#index .mint-tab-item-label{
   color: gray;
   font-size: 12px;
 }
  .my-swipe img{
    width: 100%;
  }
  #index_d2{
    width: 350px;
    height: 200px;
    margin-left: 35px;
    box-shadow: 4px 4px 5px #999;
  }
</style>
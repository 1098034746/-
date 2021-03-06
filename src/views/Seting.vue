<template>
<div id="seting">
    <!-- 顶部导航栏 -->
    <van-nav-bar
  title="遇见奶茶"
  left-text="返回"
  right-text="登录"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  />

 <div class="header">
    <img src="../assets/iu.jpg"><br><br>
    IU
 </div>
 <div class="mid">
     <div>会员中心</div>
     <div>全部订单</div>
     <div>我的收藏</div>
     <div>地址管理</div>
     <div>我的足迹</div>
 </div>

 <!-- 底部导航栏 -->
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
    data(){
        return{
            active:3
        }
    },
  methods: {
    onClickLeft() {
      this.$router.replace('/')
    },
    onClickRight() {
      this.$router.replace('/login')
    },
  },
};
</script>


<style scoped>
.header{
    width: 100%;
    height: 200px;
    background-image: url('../assets/milktea.jpg');
    text-align: center;
}
.header>img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 50px;
}
.mid div{
    color: black;
    font-size: 19px;
    font-weight: bolder;
    margin-bottom: 40px;
    margin-left: 20px;
    border-bottom: 1px dashed gray;
    padding-bottom: 10px;
}
.mid>div{
    margin-top: 20px;
}
</style>
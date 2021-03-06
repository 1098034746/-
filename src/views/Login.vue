<template>
    <div class="login">
            <van-nav-bar
  title="遇见奶茶"
  left-text="返回"
  right-text="注册"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"/>
        <div id="icon">
            <img id="img1" src="../assets/iu.jpg">
        </div>
        <div id="pass">
        <img class="icon1" src="../assets/icon1.png" alt=""><input type="text" placeholder="用户名"><br>    
        <img class="icon1" src="../assets/password.png" alt=""><input type="password" placeholder="密码"><br>
        <router-link to="/">忘记密码？</router-link><br>
        <!-- <div> -->
            <button class="btn">登录</button>
        <!-- </div> -->
        <div class="dl">
            <span>————</span>
            <span class="s1">其他方式登录</span>
            <span>————</span>
        </div>
         <a href="#">
            <img src="../assets/QQ.png">
            <p>QQ</p>
         </a>
        <a href="#">
            <img src="../assets/微博.png">
            <p>微博</p>
        </a>
        <a href="#">
            <img src="../assets/微信.png">
            <p>微信</p>
        </a>
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
            active:2
        }
    },
  methods: {
    onClickLeft() {
      this.$router.replace('/')
    },
    onClickRight() {
      this.$router.replace('/register')
    },
  }
}
</script>







<style scoped>
.login>a{
    text-decoration: none;
    opacity: 0.5;
}
#img1{
    border-radius: 50%;
    width:100px;
    height: 100px;
}
#icon{
    text-align: center;
}
.icon1{
    width: 20px;
}
input{
    width: 200px;
    height: 20px;
    border:0px;
    border-bottom:1px solid gray;
    margin-bottom: 30px;
}
input:focus{
    border: 0px;
    box-shadow: 0;
}
#pass{
    margin-top: 30px;
    text-align: center;
}
#pass>a{
    font-size:12px;
    text-decoration: none;
    color: gray;
    float: right;
    margin-right: 90px;
}
.btn{
    background: #EB5F3E;
    width: 200px;
    height: 40px;
    color: white;
    border: 0px;
    margin-top: 30px;
    border-radius: 3%;
}
span{
    color: gray;
    font-size: 12px;
}
.s1{
    margin-left: 20px;
    margin-right: 20px;
}
.dl{
    margin-top: 210px;
}
a>img{
    width: 25px;
    margin-top:15px ;
    margin-right: -9px;
}
a>p{
    margin-right: -9px;
}
input:focus{
   outline: 0;
   border-bottom:1px solid gray;
}
</style>
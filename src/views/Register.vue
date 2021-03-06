<template>
<div class="register">

  <van-nav-bar
  title="遇见奶茶"
  left-text="返回"
  right-text="注册"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"/>

<van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
</van-form>

 <van-button type="info">注册</van-button>


    </div>
</template>


<script>
export default {
  data() {
    return {
        value:'',
         username: '',
      password: '',
    };
  },
  methods: {
    onClickLeft(){
        this.$router.replace('/login')
    },
    onClickRight(){
        this.$router.replace('/')
    },
        onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>


<style scoped>
.van-button{
    width:100%;
}
</style>
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css'


import { Tabbar, TabbarItem } from 'vant';

import { Search } from 'vant';
import { NavBar } from 'vant';

import { Sidebar, SidebarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';

import { TreeSelect } from 'vant';
import { Stepper } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

import { AddressList } from 'vant';

import { Field } from 'vant';
import { Form } from 'vant';
import { Button } from 'vant';

Vue.use(Button);

Vue.use(Form);

Vue.use(Field);

Vue.use(AddressList);

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Stepper);

Vue.use(TreeSelect);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(NavBar);

Vue.use(Search);


Vue.use(Tabbar);
Vue.use(TabbarItem);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

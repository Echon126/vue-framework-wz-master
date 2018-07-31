import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';

Vue.use(Vuex);



const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
});

export default store

/**
 * vuex 中核心概念
 * 1.state :
 *  vuex 中的状态存储是响应式的，当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也响应的得到高效的更新。
 *  不能直接改变store中的状态，改变store中状态的唯一途径就是显示的提交(commmit)mutation,这样使得我们可以方便的跟踪每一个状态的变化。
 */
















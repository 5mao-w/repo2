import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:'dream',
    list: [
        {
          id:1,
          title:'框架玩学会了吗？',
          completed:true
        },
      {
        id:2,
        title:'vuex玩学会了吗？',
        completed:true
      },
      {
        id:3,
        title:'明天准备实战了吗？',
        completed:false
      },
    ],
    count:130,
  },
  getters:{
    num1(state){
      return state.count
    },
    num2(state,getters){
      return getters.num1+getters.num1
    },
    completed(state){
      return state.list.filter(item=>item.completed);
      return state.list.filter(item=>item.id===3)
    },
    listen(state,getters){
      return getters.completed.length
    }
  },
  mutations: {//用commit传回来
    reduceC(state,n=1){
      state.count=state.count-n
    }
  },
  actions: {//处理异步 提交mutations    用dispatch派发出去
    decrementCAsync(context,val){
      setTimeout(()=>{
        context.commit('reduceC',val)
      },2000)
    }
  },
  modules: {
  }
})

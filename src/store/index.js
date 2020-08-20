import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cententList: [
      {
        id: 1,
        name: "奶茶1",
        Teaselect: [
          {
            value: 1,
            name: "奶茶1-1",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 2,
            name: "奶茶1-2",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 3,
            name: "奶茶1-3",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 4,
            name: "奶茶1-4",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 5,
            name: "奶茶1-5",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
        ],
      },
      {
        id: 2,
        name: "奶茶2",
        Teaselect: [
          {
            value: 1,
            name: "奶茶2-1",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 2,
            name: "奶茶2-2",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 3,
            name: "奶茶2-3",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 4,
            name: "奶茶2-4",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 5,
            name: "奶茶2-5",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
        ],
      },
      {
        id: 3,
        name: "奶茶3",
        Teaselect: [
          {
            value: 1,
            name: "奶茶3-1",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 2,
            name: "奶茶3-2",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 3,
            name: "奶茶3-3",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 4,
            name: "奶茶3-4",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
          {
            value: 5,
            name: "奶茶3-5",
            Teastyle: "正常糖",
            Teaicestyle: "正常冰",
          },
        ],
      },
    ],
    orderList:[],
    count:0,
  },
  mutations: {
    //将奶茶的种类传递到奶茶的名字展示上
    OrderListChange: (state,payload) => {
      state.orderList.push(payload)
    },
  },
  actions: {
  },
  modules: {
  }
})

<template>
  <div class="HomeCentent">
    <div class="ordercentent">
      <el-button type="success" plain @click="addOrder">提交订单</el-button>
      <div
        class="cententbox"
        v-for="(item,value) in Teacentent"
        :key="value"
        @click="TeaCententSelect(value)"
        :class="{active:currentIndex === value}"
      >
        <div class="centent">{{item.name}}{{item.Teaicestyle}}{{item.Teastyle}}</div>
      </div>
    </div>
    <div class="orderselect">
      <div class="centent" v-for="(item,value) in Teaselect" :key="value">
        <el-button type="success" plain @click="TeaClick(value)">{{item.name}}</el-button>
      </div>
    </div>
    <div class="orderstyle">
      <div
        class="cententbox"
        v-for="(item,value) in Teastyle"
        :key="value"
        @click="TeaStyleSelect(value)"
      >
        <el-button type="success" plain>{{item.style}}</el-button>
      </div>
    </div>
    <div class="ordertype">
      <div
        class="centent"
        v-for="(item,value) in Teaordertype()"
        :key="value"
        @click="TeaTypeSelect(value)"
      >
        <el-button type="success" plain>{{item.name}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//import cententbutton from '../styleButton';
export default {
  name: "HomeCentent",
  data() {
    return {
      time: [
        {time:new Date()}
      ],
      currentIndex: 0,
      Teacentent: [],
      Teaselect: [],
      Teastyle: [
        {
          value: 1,
          style: "多糖",
        },
        {
          value: 2,
          style: "正常糖",
        },
        {
          value: 3,
          style: "少糖",
        },
        {
          value: 4,
          style: "无糖",
        },
        {
          value: 5,
          style: "温热",
        },
        {
          value: 6,
          style: "常温",
        },
        {
          value: 7,
          style: "少冰",
        },
        {
          value: 8,
          style: "正常冰",
        },
      ],
    };
  },
  components: {},
  methods: {
    Teaordertype() {
      return this.$store.state.cententList;
    },
    TeaTypeSelect(index) {
      this.Teaselect = this.$store.state.cententList[index].Teaselect;
      //可以使用下面的方法避免数据的双向绑定 如this.arr = this.arr1 修改this.arr的时候this.arr1也进行修改
      //this.Teaselect = JSON.parse(JSON.stringify(this.cententList[index].Teaselect))
    },
    TeaClick(index) {

        this.currentIndex = this.Teacentent.length;

      this.Teacentent.push(JSON.parse(JSON.stringify(this.Teaselect[index])));
    },
    TeaStyleSelect(index) {
      if (this.Teacentent[0] === undefined) {
        return console.log("请选择奶茶");
      } else {
        if (index > 3) {
          this.Teacentent[this.currentIndex].Teaicestyle = this.Teastyle[
            index
          ].style;
        } else if (index < 4) {
          this.Teacentent[this.currentIndex].Teastyle = this.Teastyle[
            index
          ].style;
        }
      }
    },
    TeaCententSelect(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
    },
    addOrder() {
      this.Teacentent.push(this.time)
      this.$store.commit("OrderListChange", this.Teacentent);
      this.Teacentent = [];
      console.log(this.$store.state.orderList)
    },
    myFunction(item,index){
      console.log('index[' + index + ']' + item)
    }
  },
};
</script>

<style scope>
.HomeCentent {
  width: 100%;
  height: 84vh;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.HomeCentent .ordercentent {
  width: 30%;
  height: 100%;
  display: flex;
  border: 2px solid rgba(39, 174, 96, 0.3);
  border-radius: 8px;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px;
}
.HomeCentent .orderselect {
  width: 50%;
  height: 100%;
  display: grid;
  border: 2px solid rgba(39, 174, 96, 0.3);
  border-radius: 8px;
  padding: 10px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(auto-fill, 50px);
  justify-items: center;
  align-items: center;
}
.HomeCentent .orderstyle {
  width: 10%;
  height: 100%;
  display: flex;
  border: 2px solid rgba(39, 174, 96, 0.3);
  border-radius: 8px;
  padding: 10px;
  flex-direction: column;
}
.HomeCentent .ordertype {
  width: 10%;
  height: 100%;
  display: flex;
  border: 2px solid rgba(39, 174, 96, 0.3);
  border-radius: 8px;
  padding: 10px;
  flex-direction: column;
}
.orderselect .centent {
  width: 90px;
  height: 50px;
  margin: 0 5px;
}
.orderselect .centent .button {
  width: 90px;
  height: 50px;
}
.ordertype .centent {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin: 5px 0;
}
.ordercentent .cententbox {
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border: 2px solid rgba(39, 174, 96, 0.3);
  margin: 1px 0;
  display: block;
}
.ordercentent .cententbox.active {
  background-color: rgba(39, 174, 96, 0.3);
}
.ordercentent .cententbox .centent {
  padding: 5px;
}
.orderstyle .cententbox {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin: 5px 0;
}
</style>
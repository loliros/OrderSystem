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
        <div class="centent">{{item.teaName}}{{item.teaice}}{{item.teasugar}}{{item.teamoney}}</div>
      </div>
    </div>
    <div class="orderselect">
      <div class="centent" v-for="(item,value) in Teaselectchange" :key="value">
        <el-button type="success" plain @click="TeaClick(value)">{{item.teaName}}</el-button>
      </div>
    </div>
    <div class="orderstyle">
      <div
        class="cententbox"
        v-for="(item,value) in Teastyle"
        :key="value"
        @click="TeaStyleSelect(value)"
      >
        <el-button type="success" plain>{{item.name}}</el-button>
      </div>
    </div>
    <div class="ordertype">
      <div
        class="centent"
        v-for="(item,value) in teatype"
        :key="value"
        @click="TeaTypeSelect(value)"
      >
        <el-button type="success" plain>{{item}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCentent",
  data() {
    return {
      teatype: [],
      Teaselect: [],
      Teaselectchange: [],
      currentIndex: 0,
      Teacentent: [],
      Teastyle: [],
      time: new Date(),
    };
  },
  methods: {
    Teaordertype() {
      return this.$store.state.cententList;
    },
    TeaTypeSelect(index) {
      if (this.Teaselectchange != null) {
        this.Teaselectchange = [];
      }
      for (let i in this.Teaselect) {
        if (this.Teaselect[i].teatype === index + 1) {
          this.Teaselectchange.push(this.Teaselect[i]);
        }
      }
    },
    TeaClick(index) {
      console.log(this.Teaselectchange[index]);
      this.currentIndex = this.Teacentent.length;
      this.Teacentent.push(
        JSON.parse(JSON.stringify(this.Teaselectchange[index]))
      );
    },
    TeaStyleSelect(index) {
      if (this.Teacentent[0] === undefined) {
        return console.log("请选择奶茶");
      } else {
        if (index > 3) {
          this.Teacentent[this.currentIndex].teasugar = this.Teastyle[
            index
          ].name;
        } else if (index < 4) {
          this.Teacentent[this.currentIndex].teaice = this.Teastyle[index].name;
        }
      }
    },
    TeaCententSelect(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
    },
    addOrder() {
      console.log(this.Teacentent);
      this.axios
        .post("http://localhost:3000/Order", this.Teacentent, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(this.Teacentent);
        })
        .catch((err) => {
          console.log(err);
        });
      // 路由跳转
      // const path = this.$router.path
      // console.log(path)
    },
    Teaadd() {
      this.axios
        .get("http://localhost:3000/Tea")
        .then((res) => {
          console.log(res.data);
          console.log(res.status);
          console.log(res.statusText);
          console.log(res.headers);
          console.log(res.config);
          for (let i in res.data) {
            this.teatype.push(res.data[i].teaName);
          }
          console.log(this.teatype);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    TeaSelectadd() {
      this.axios
        .get("http://localhost:3000/TeaSelect")
        .then((res) => {
          console.log(res.data);
          for (let i in res.data) {
            this.Teaselect.push(res.data[i]);
          }
          console.log(this.Teaselect);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Sugariceadd() {
      this.axios
        .get("http://localhost:3000/Sugarice")
        .then((res) => {
          console.log(res);
          for (let i in res.data) {
            this.Teastyle.push(res.data[i]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.Teaadd();
    this.TeaSelectadd();
    this.Sugariceadd();
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
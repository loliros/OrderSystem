<template>
  <div id="Order">
    <Header title="订单查询" />
    <div class="tbody">
      <Nav />
      <!-- <OrderCentent /> -->
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Nav from "../../components/SystemNav";
// import OrderCentent from '../../components/OrderCentent';
export default {
  name: "Order",
  components : {
    Header,
    Nav,
    // OrderCentent,
  },
  data() {
      return {
        //orderList : [],
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      OrderMassage(){
        this.orderList = this.$store.state.orderList
      }
    },
    created(){
      this.axios.get('http://localhost:3000').then( (res) =>{
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
};
</script>

<style>
.tbody {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
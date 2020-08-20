<template>
  <div class="Home">
    <div class="header">
      <Header title="订单创建" />
    </div>
    <div class="tbody">
      <Nav />
      <centent />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Nav from "../../components/SystemNav";
import centent from "../../components/HomeCentent/Centent.vue";
export default {
  name: "Home",
  components: {
    Header,
    Nav,
    centent,
  },
};
</script>

<style>
.Home {
  width: 100%;
  height: 100vh;
}
.header{
  width: 100%;
}
.tbody {
  display: flex;
  flex-direction: row;
}
</style>
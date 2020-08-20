<template>
  <div id="Header">
    {{title}}
  </div>
</template>

<script>
export default {
  name : 'Header',
  props:{
    title : {
      type : String,
      default : '点餐系统',
    }
  }
}
</script>

<style scope>
#Header{
  width: 100%;
  height: 50px;
  background: #27ae60;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: 5px;
}
</style>
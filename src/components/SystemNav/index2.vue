<template>
  <el-col :span="4" class="nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#27ae60"
      router=router
      mode="horizontal"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item route="/home" index="1-1">订单创建</el-menu-item>
          <el-menu-item route="/order" index="1-2">订单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>座位功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item route="/home" index="2-1">座位创建</el-menu-item>
          <el-menu-item route="/order" index="2-2">座位查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>表单功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item route="/home" index="3-1">表单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name:'SystemNav',
  data(){
    return{
      route:true,
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scope>
.el-col{
  border: 1px solid #27ae60;
  border-top:none;
}
</style>
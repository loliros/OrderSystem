<template>
  <div class="Nav">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router="router"
      text-color="#27ae60"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单功能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item route="/home" index="1-1">订单创建</el-menu-item>
          <el-menu-item route="/order" index="1-2">订单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span slot="title">订单功能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item route="/home" index="1-1">订单创建</el-menu-item>
          <el-menu-item route="/order" index="1-2">订单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-more"></i>
          <span slot="title">订单功能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item route="/home" index="1-1">订单创建</el-menu-item>
          <el-menu-item route="/order" index="1-2">订单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Nav{
  height:92vh;
}
.el-menu-vertical-demo{
  height: 100%;
}
</style>

<script>
export default {
  name: "SystemNav",
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
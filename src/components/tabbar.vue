<template>
  <div>
    <router-view />
    <van-tabbar route fixed safe-area-inset-bottom>
      <van-tabbar-item replace to="/Home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/Forum" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="/Home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/Person" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>



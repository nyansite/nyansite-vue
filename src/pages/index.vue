<template>
  <div>
    <Notice />
    <TopMenu />
    <TopPic />
    <!-- 视频/论坛切换 -->
    <div relative top-80 w-85vw h-fit m="0 auto" rgbacolor-163-170-0-1>
      <span font="bold size-23px" m-inline-3>视频</span>
      <span font="bold size-23px" m-inline-3>论坛</span>
    </div>
    <!-- 侧边栏 -->
    <div absolute top-90 left-8 h-fit font="bold size-17px" rgbacolor-163-170-0-1
        line-height-35px
    >
      <h1>标签</h1>
      <h1>最新</h1>
      <h1>最热</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
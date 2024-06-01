<template>
    <!-- 顶部图片 -->
    <div absolute top-0 left-0 w-full h-300px class="bg-pic" >
        <h1 absolute bottom-50px left-20px text-white font-size-30px font-bold>NYANYA 喵站</h1>
    </div>
</template>

<script setup lang="ts" name="TopPic">

</script>

<style scoped>
.bg-pic {
  background-image: url("../assets/pictures/wife.png");
  object-fit: cover;
  background-size: cover;
  /* 裁剪图片 */
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
}
</style>
<template>
    <!-- 顶部小菜单 -->
    <div fixed right-0 top-0 w-fit h-8 bg-rgba-255-0-118-1 inline-flex items-center justify-center z-5>
        <div i-carbon-moon top-menu-icon hover:rotate-45 v-if="isDark" @click="() => toggleDark()"/>
        <div i-carbon-sun top-menu-icon hover:rotate-45 v-else @click="() => toggleDark()"/>
        <div i-carbon-search top-menu-icon hover:rotate-45/>
        <div i-carbon-menu top-menu-icon />
        <!-- 头像，未登录则显示登录按钮 -->
        <button bg-white text-pink-6 p-inline-3 m-inline-2 border-rd-2
            hover:bg-blue hover:text-white
            @click="router.push('/login')"
        >登录</button>
    </div>
</template>

<script setup lang="ts" name="TopMenu">
const router = useRouter()

</script>
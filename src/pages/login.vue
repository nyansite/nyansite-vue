<template>
    <!-- bg image -->
    <div class="bg" fixed top-0 left-0 w-full h-full z-0 opacity-80/>

    <!-- back -->
    <div fixed top-2 left-2 p-2 bg-transparent transition-all-200
         hover:bg-orange border="rd-4 1px solid orange" cursor-pointer
         @click="router.push('/')">
        ← 返回</div>

    <div class="toggle-theme" i-carbon-moon v-if="isDark" @click="() => toggleDark()" />
    <div class="toggle-theme" i-carbon-sun v-else @click="() => toggleDark()" />

    <div flex="~ col justify-center items-center" border="rd-3" min-w-100
         z-1 w-60vw h-50vh p-5 bg-rgba-0-0-0-0.5 color-white absolute
         top-25vh left-20vw
         >
        <h1 font-size-50px>登录</h1>
        <p p-2>
            <span p-1>用户名:</span>
            <Input w-90/>
        </p>
        <p p-2>
            <span p-1 m-r-4>密码:</span>
            <Input type="password" w-90/>
        </p>
        <button btn m-3 w-30 h-10>登录</button>

    </div>

</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>
.bg {
    background-image: url("../assets/pictures/login-bg.jpg");
    object-fit: cover;
    background-size: cover;
}

.toggle-theme {
    transition: all, 200ms;
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}

.toggle-theme:hover {
    rotate: 45deg;
    color: red;
}
</style>
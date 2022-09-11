<template>
    <div
        class="absolute inset-0 brightness-110 bg-center bg-cover img"
        :style="{ backgroundImage: `url(${url})` }"
    ></div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{ url: string }>();
</script>

<style scoped lang="scss">
.img {
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
}
</style>

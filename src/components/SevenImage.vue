<template>
    <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: `url(${url})` }"
    ></div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{ url: string }>();
</script>

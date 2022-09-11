<template>
    <div
        class="absolute inset-0 shadow-vignette brightness-110 bg-center bg-cover"
        :style="{ backgroundImage: `url(${url})` }"
    ></div>
</template>

<script setup lang="ts">
import { preloadImage } from '@/preload';

const props = defineProps<{ url: string }>();
await preloadImage(props.url);
</script>

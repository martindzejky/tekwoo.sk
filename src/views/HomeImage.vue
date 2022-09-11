<template>
    <div
        class="w-screen h-screen shadow-vignette brightness-110 bg-center bg-cover"
        :style="{ backgroundImage: `url(${IMG})` }"
    ></div>
</template>

<script setup lang="ts">
import IMG from '@/assets/images/home.jpg';
import { preloadImage } from '@/preload';

await preloadImage(IMG);
</script>

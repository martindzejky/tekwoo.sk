<template>
    <div class="bg-black">
        <Transition
            appear
            appear-active-class="transition duration-1000 ease-out"
            appear-from-class="opacity-0"
        >
            <div
                class="w-screen h-screen shadow-vignette brightness-110 bg-center bg-cover"
                :style="{ backgroundImage: `url(${IMG})` }"
            ></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import IMG from '@/assets/images/home.jpg';
</script>

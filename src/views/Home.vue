<template>
    <Transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition duration-1000 ease-in"
        leave-to-class="opacity-0"
    >
        <Suspense>
            <HomeImage />
        </Suspense>
    </Transition>
</template>

<script setup lang="ts">
import HomeImage from '@/views/HomeImage.vue';
</script>

<template>
    <div class="w-screen h-screen relative">
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <SevenImage v-if="counter === 0" :url="IMG1" />
            <SevenImage v-else-if="counter === 1" :url="IMG2" />
            <SevenImage v-else-if="counter === 2" :url="IMG3" />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useInterval } from '@vueuse/core';
import { watch } from 'vue';

import IMG1 from '../assets/images/seven/1.jpg';
import IMG2 from '../assets/images/seven/2.jpg';
import IMG3 from '../assets/images/seven/3.jpg';
import SevenImage from '@/components/SevenImage.vue';

const { counter, pause } = useInterval(3000, { controls: true });
watch(counter, (counter) => {
    if (counter >= 2) pause();
});
</script>

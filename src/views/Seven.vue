<template>
    <div class="w-screen h-screen relative">
        <Transition
            mode="in-out"
            enter-active-class="transition duration-[1s]"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-[1s]"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <Suspense>
                <SevenImage v-if="counter === 0" :url="IMG1" />
                <SevenImage v-else-if="counter === 1" :url="IMG2" />
                <SevenImage v-else-if="counter === 2" :url="IMG3" />
                <SevenImage v-else-if="counter === 3" :url="IMG4" />
                <SevenImage v-else-if="counter === 4" :url="IMG5" />
            </Suspense>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useInterval } from '@vueuse/core';
import { watch } from 'vue';

import IMG1 from '@/assets/images/seven/1.jpg';
import IMG2 from '@/assets/images/seven/2.jpg';
import IMG3 from '@/assets/images/seven/3.jpg';
import IMG4 from '@/assets/images/seven/4.jpg';
import IMG5 from '@/assets/images/seven/5.jpg';
import SevenImage from '@/components/SevenImage.vue';

const { counter, pause } = useInterval(2000, { controls: true });
watch(counter, (counter) => {
    if (counter >= 4) pause();
});
</script>

<template>
    <Transition
        appear
        appear-active-class="transition duration-1000 ease-out delay-500"
        appear-from-class="-translate-y-full"
    >
        <div
            class="fixed font-handwritten inset-x-0 flex gap-4 items-end text-white z-10 py-4 px-10"
        >
            <RouterLink class="text-4xl hover:text-light transition cursor-pointer" to="/">
                Tekwoo
            </RouterLink>

            <div class="grow"></div>

            <a
                class="text-lg leading-snug hover:text-light transition cursor-pointer"
                href="mailto:martindzejky@gmail.com"
            >
                Kontakt
            </a>

            <RouterLink
                class="text-lg leading-snug hover:text-light transition cursor-pointer"
                to="/7"
            >
                Dielňa
            </RouterLink>
        </div>
    </Transition>

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
